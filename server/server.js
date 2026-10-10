import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import dotenv from 'dotenv';
import crypto from 'crypto';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// Resume Schema
const resumeSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
  originalName: {
    type: String,
    required: true
  },
  filePath: {
    type: String,
    required: true
  },
  fileSize: {
    type: Number,
    required: true
  },
  mimeType: {
    type: String,
    required: true
  },
  uploadDate: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

const Resume = mongoose.model('Resume', resumeSchema);

// Multer Configuration for File Upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'resume-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  // Accept only PDF files
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Only PDF files are allowed!'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Routes

// ── AUTHENTICATION SYSTEM ──────────────────────────────────────────────────
const createAuthToken = (email) => {
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const payload = Buffer.from(JSON.stringify({
    email,
    role: 'admin',
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 86400 * 7 // 7 days validity
  })).toString('base64url');
  const secret = process.env.JWT_SECRET || 'pradeep_portfolio_cyber_secret_key_2026_secure';
  const signature = crypto.createHmac('sha256', secret).update(`${header}.${payload}`).digest('base64url');
  return `${header}.${payload}.${signature}`;
};

const verifyAuthToken = (token) => {
  if (!token) return null;
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const [header, payload, signature] = parts;
    const secret = process.env.JWT_SECRET || 'pradeep_portfolio_cyber_secret_key_2026_secure';
    const expectedSig = crypto.createHmac('sha256', secret).update(`${header}.${payload}`).digest('base64url');
    if (signature !== expectedSig) return null;
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    if (data.exp && data.exp < Math.floor(Date.now() / 1000)) return null;
    return data;
  } catch (err) {
    return null;
  }
};

// Admin Login endpoint (supports both /api/auth/login and /api/login)
app.post(['/api/auth/login', '/api/login'], (req, res) => {
  const { email, password } = req.body || {};
  const cleanEmail = (email || '').trim().toLowerCase();
  const cleanPass = (password || '').trim();

  const targetEmail = (process.env.ADMIN_EMAIL || 'pradeepgobi8@gmail.com').trim().toLowerCase();
  const targetPass = (process.env.ADMIN_PASS || 'pradeep@2006#').trim();

  if (cleanEmail === targetEmail && cleanPass === targetPass) {
    const token = createAuthToken(cleanEmail);
    console.log(`[AUTH] Admin login successful for ${cleanEmail}`);
    return res.status(200).json({
      success: true,
      status: 200,
      message: 'Authentication successful',
      token,
      user: {
        email: cleanEmail,
        role: 'admin',
        name: 'Pradeep G'
      }
    });
  }

  console.warn(`[AUTH] Failed login attempt for email: ${cleanEmail}`);
  return res.status(401).json({
    success: false,
    status: 401,
    message: 'Invalid Admin Email or Password'
  });
});

// Verify token endpoint
app.get('/api/auth/verify', (req, res) => {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.substring(7) : authHeader;
  const decoded = verifyAuthToken(token);
  if (decoded) {
    return res.status(200).json({
      success: true,
      status: 200,
      valid: true,
      user: decoded
    });
  }
  return res.status(401).json({
    success: false,
    status: 401,
    valid: false,
    message: 'Invalid or expired token'
  });
});

// Home route - API info
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Portfolio API</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          max-width: 800px;
          margin: 50px auto;
          padding: 20px;
          background: #1a1a2e;
          color: #eee;
        }
        h1 { color: #667eea; }
        .endpoint {
          background: #16213e;
          padding: 15px;
          margin: 10px 0;
          border-radius: 8px;
          border-left: 4px solid #667eea;
        }
        .method {
          display: inline-block;
          padding: 4px 8px;
          border-radius: 4px;
          font-weight: bold;
          margin-right: 10px;
        }
        .get { background: #28a745; }
        .post { background: #007bff; }
        .delete { background: #dc3545; }
        code {
          background: #0f172a;
          padding: 2px 6px;
          border-radius: 4px;
          color: #fbbf24;
        }
        .status {
          background: #28a745;
          color: white;
          padding: 10px 20px;
          border-radius: 8px;
          display: inline-block;
          margin: 20px 0;
        }
      </style>
    </head>
    <body>
      <h1>🚀 Portfolio API Server</h1>
      <div class="status">✅ Server is running on port ${PORT}</div>
      <div class="status">✅ MongoDB: ${mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'}</div>
      
      <h2>📚 Available Endpoints:</h2>
      
      <div class="endpoint">
        <span class="method get">GET</span>
        <code>/api/health</code>
        <p>Check server and database health status</p>
      </div>
      
      <div class="endpoint">
        <span class="method get">GET</span>
        <code>/api/resume/active</code>
        <p>Get the currently active resume</p>
      </div>
      
      <div class="endpoint">
        <span class="method post">POST</span>
        <code>/api/resume/upload</code>
        <p>Upload a new resume PDF (multipart/form-data)</p>
      </div>
      
      <div class="endpoint">
        <span class="method get">GET</span>
        <code>/api/resume/download/:id</code>
        <p>Download resume by ID</p>
      </div>
      
      <div class="endpoint">
        <span class="method get">GET</span>
        <code>/api/resume/preview/:id</code>
        <p>Preview resume by ID in browser</p>
      </div>
      
      <div class="endpoint">
        <span class="method get">GET</span>
        <code>/api/resume/all</code>
        <p>Get all resumes (admin)</p>
      </div>
      
      <div class="endpoint">
        <span class="method delete">DELETE</span>
        <code>/api/resume/:id</code>
        <p>Delete resume by ID</p>
      </div>
      
      <h2>🎯 Frontend:</h2>
      <p>Access your portfolio at: <a href="http://localhost:3000" style="color: #667eea;">http://localhost:3000</a></p>
      <p>Upload resume at: <a href="http://localhost:3000/admin/upload" style="color: #667eea;">http://localhost:3000/admin/upload</a></p>
    </body>
    </html>
  `);
});

// Get active resume
app.get('/api/resume/active', async (req, res) => {
  try {
    const resume = await Resume.findOne({ isActive: true }).sort({ uploadDate: -1 });
    
    if (!resume) {
      return res.status(404).json({ message: 'No active resume found' });
    }

    res.json({
      success: true,
      resume: {
        id: resume._id,
        filename: resume.originalName,
        uploadDate: resume.uploadDate,
        fileSize: resume.fileSize,
        downloadUrl: `/api/resume/download/${resume._id}`,
        previewUrl: `/api/resume/preview/${resume._id}`
      }
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error fetching resume', 
      error: error.message 
    });
  }
});

// Upload new resume
app.post('/api/resume/upload', upload.single('resume'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ 
        success: false, 
        message: 'No file uploaded' 
      });
    }

    // Deactivate all previous resumes
    await Resume.updateMany({}, { isActive: false });

    // Create new resume record
    const newResume = new Resume({
      filename: req.file.filename,
      originalName: req.file.originalname,
      filePath: req.file.path,
      fileSize: req.file.size,
      mimeType: req.file.mimetype,
      isActive: true
    });

    await newResume.save();

    res.status(201).json({
      success: true,
      message: 'Resume uploaded successfully',
      resume: {
        id: newResume._id,
        filename: newResume.originalName,
        uploadDate: newResume.uploadDate,
        fileSize: newResume.fileSize
      }
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error uploading resume', 
      error: error.message 
    });
  }
});

// Download resume
app.get('/api/resume/download/:id', async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    
    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }

    res.download(resume.filePath, resume.originalName);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error downloading resume', 
      error: error.message 
    });
  }
});

// Preview resume
app.get('/api/resume/preview/:id', async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    
    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline');
    res.sendFile(path.resolve(resume.filePath));
  } catch (error) {
    res.status(500).json({ 
      message: 'Error previewing resume', 
      error: error.message 
    });
  }
});

// Get all resumes (admin)
app.get('/api/resume/all', async (req, res) => {
  try {
    const resumes = await Resume.find().sort({ uploadDate: -1 });
    res.json({
      success: true,
      count: resumes.length,
      resumes: resumes.map(r => ({
        id: r._id,
        filename: r.originalName,
        uploadDate: r.uploadDate,
        fileSize: r.fileSize,
        isActive: r.isActive
      }))
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error fetching resumes', 
      error: error.message 
    });
  }
});

// Delete resume
app.delete('/api/resume/:id', async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    
    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }

    // Delete file from filesystem
    if (fs.existsSync(resume.filePath)) {
      fs.unlinkSync(resume.filePath);
    }

    // Delete from database
    await Resume.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'Resume deleted successfully'
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error deleting resume', 
      error: error.message 
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Server is running',
    mongodb: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!', 
    error: err.message 
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📂 Uploads directory: ${uploadsDir}`);
});
