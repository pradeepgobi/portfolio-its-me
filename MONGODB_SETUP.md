# MongoDB Setup Guide for Portfolio Resume Upload

## Prerequisites
- MongoDB Compass installed
- Node.js installed

## Step 1: Install MongoDB Compass
If you haven't already, download and install MongoDB Compass from:
https://www.mongodb.com/try/download/compass

## Step 2: Connect to MongoDB

### Option A: Local MongoDB (Recommended for Development)
1. Open MongoDB Compass
2. Use connection string: `mongodb://localhost:27017`
3. Click "Connect"
4. The database `portfolio` will be created automatically when you upload your first resume

### Option B: MongoDB Atlas (Cloud)
1. Create a free account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster
3. Get your connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)
4. Update the `.env` file with your connection string

## Step 3: Install Backend Dependencies
```bash
cd server
npm install
```

## Step 4: Configure Environment Variables
Edit the `.env` file in the root directory:
```
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=5000
FRONTEND_URL=http://localhost:5173
```

## Step 5: Start the Backend Server
```bash
# From the server directory
cd server
npm start

# Or for development with auto-reload
npm run dev
```

You should see:
```
✅ MongoDB Connected Successfully
🚀 Server running on port 5000
```

## Step 6: Start the Frontend
In a new terminal:
```bash
# From the project root
npm run dev
```

## Step 7: Upload Your Resume

### Method 1: Use the Upload Page
1. Navigate to: http://localhost:5173/admin/upload
2. Click "Choose File" and select your PDF resume
3. Click "Upload Resume"
4. Success! Your resume is now stored in MongoDB

### Method 2: Use API Directly (Postman/Thunder Client)
```
POST http://localhost:5000/api/resume/upload
Body: form-data
Key: resume
Value: [Your PDF file]
```

## Verify in MongoDB Compass
1. Open MongoDB Compass
2. Connect to your database
3. You should see:
   - Database: `portfolio`
   - Collection: `resumes`
   - Documents: Your uploaded resume metadata

## API Endpoints

### Get Active Resume
```
GET http://localhost:5000/api/resume/active
```

### Upload Resume
```
POST http://localhost:5000/api/resume/upload
Content-Type: multipart/form-data
Body: resume=[PDF file]
```

### Download Resume
```
GET http://localhost:5000/api/resume/download/:id
```

### Preview Resume
```
GET http://localhost:5000/api/resume/preview/:id
```

### Get All Resumes
```
GET http://localhost:5000/api/resume/all
```

### Delete Resume
```
DELETE http://localhost:5000/api/resume/:id
```

### Health Check
```
GET http://localhost:5000/api/health
```

## Troubleshooting

### Error: MongoDB Connection Failed
- Make sure MongoDB is running
- Check if the connection string in `.env` is correct
- Try connecting manually in MongoDB Compass first

### Error: Cannot read property of undefined
- Make sure the backend server is running
- Check if `http://localhost:5000` is accessible
- Look for CORS errors in browser console

### Error: File too large
- Maximum file size is 5MB
- Compress your PDF or increase the limit in `server.js` (line 85)

### Upload works but can't download
- Check if the `server/uploads` directory exists
- Verify file permissions

## Database Schema

### Resume Collection
```javascript
{
  _id: ObjectId,
  filename: String,          // Stored filename (unique)
  originalName: String,      // Original upload name
  filePath: String,          // Full path to file
  fileSize: Number,          // Size in bytes
  mimeType: String,          // Should be 'application/pdf'
  uploadDate: Date,          // Upload timestamp
  isActive: Boolean          // Only one active resume at a time
}
```

## Security Notes (For Production)

1. **Add Authentication**: Protect the upload endpoint with JWT/OAuth
2. **Add Rate Limiting**: Prevent abuse
3. **File Validation**: Add more strict PDF validation
4. **Environment Variables**: Never commit `.env` to git
5. **HTTPS**: Use HTTPS in production
6. **CORS**: Configure CORS properly for your domain

## Production Deployment

### Environment Variables to Set:
```
MONGODB_URI=your_production_mongodb_uri
PORT=5000
FRONTEND_URL=https://yourdomain.com
NODE_ENV=production
```

### Recommended Hosting:
- Backend: Heroku, Railway, Render, DigitalOcean
- Database: MongoDB Atlas
- Frontend: Vercel, Netlify

## File Storage Options

Currently, files are stored in the local `server/uploads` directory. For production, consider:

1. **AWS S3**: For scalable cloud storage
2. **Cloudinary**: For PDF hosting with CDN
3. **GridFS**: Store files directly in MongoDB (for files > 16MB)

## Next Steps

1. Test the upload functionality
2. Customize the contact information in Resume.jsx
3. Add authentication for the admin upload page
4. Deploy to production
5. Set up automatic backups for MongoDB

## Support

If you encounter issues:
1. Check server logs in the terminal
2. Check browser console for errors
3. Verify MongoDB connection in Compass
4. Ensure all dependencies are installed
