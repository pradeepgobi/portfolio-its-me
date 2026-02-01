# Resume Setup Instructions

## Files Needed

You need TWO files in the `public` folder:

1. **pradeep.pdf** - The actual PDF file (for download)
2. **pradeep.jpg** - Image preview of the resume (for display)

## Steps to Setup

### Step 1: Rename and Move PDF
1. Rename your file from `pradeep .pdf.pdf` to `pradeep.pdf` (remove spaces)
2. Move it to: `r:\protfolio\public\pradeep.pdf`

### Step 2: Convert PDF to Image

**Option A - Online Tools (Easiest):**
1. Go to https://www.ilovepdf.com/pdf_to_jpg
2. Upload your `pradeep.pdf`
3. Download the first page as JPG
4. Rename it to `pradeep.jpg`
5. Place it in: `r:\protfolio\public\pradeep.jpg`

**Option B - Using Windows:**
1. Open the PDF in a browser (Edge/Chrome)
2. Zoom to 100%
3. Take a screenshot (Windows + Shift + S)
4. Save as `pradeep.jpg` in the public folder

**Option C - Using Command (if you have ImageMagick):**
```bash
magick convert "pradeep .pdf.pdf[0]" -quality 90 pradeep.jpg
```

## Final Folder Structure

```
r:\protfolio\
├── public\
│   ├── pradeep.pdf     ← PDF for download
│   └── pradeep.jpg     ← Image for preview
```

## Verification

After setup, your resume should:
- ✅ Display as an image on the Resume page
- ✅ Download as PDF when clicking "Download Resume"
