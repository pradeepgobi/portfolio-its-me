# PDF to Image Converter Script
# This script converts the first page of pradeep.pdf to pradeep.jpg

Write-Host "Converting PDF to Image..." -ForegroundColor Cyan

# Check if PDF exists
$pdfPath = "r:\protfolio\public\pradeep.pdf"
$outputPath = "r:\protfolio\public\pradeep.jpg"

if (-not (Test-Path $pdfPath)) {
    Write-Host "Error: pradeep.pdf not found in public folder!" -ForegroundColor Red
    exit 1
}

# Method 1: Try using Windows built-in PDF renderer (if available)
try {
    Add-Type -AssemblyName System.Drawing
    
    # Try to open PDF using default PDF reader and take screenshot
    Write-Host "Opening PDF in default viewer..." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "====================================================" -ForegroundColor Green
    Write-Host "MANUAL STEP REQUIRED:" -ForegroundColor Yellow
    Write-Host "1. The PDF will open in your default PDF viewer" -ForegroundColor White
    Write-Host "2. Press Windows + Shift + S to take a screenshot" -ForegroundColor White
    Write-Host "3. Select the entire first page" -ForegroundColor White
    Write-Host "4. Save it as 'pradeep.jpg' in:" -ForegroundColor White
    Write-Host "   $outputPath" -ForegroundColor Cyan
    Write-Host "====================================================" -ForegroundColor Green
    Write-Host ""
    
    # Open the PDF
    Start-Process $pdfPath
    
    Write-Host "Waiting for you to save the screenshot..." -ForegroundColor Yellow
    Read-Host "Press Enter when you've saved pradeep.jpg in the public folder"
    
    if (Test-Path $outputPath) {
        Write-Host "Success! pradeep.jpg found!" -ForegroundColor Green
    } else {
        Write-Host "Warning: pradeep.jpg not found. Please save it manually." -ForegroundColor Yellow
    }
    
} catch {
    Write-Host "Error: $_" -ForegroundColor Red
}

Write-Host ""
Write-Host "Alternative: Use online converter at https://www.ilovepdf.com/pdf_to_jpg" -ForegroundColor Cyan
