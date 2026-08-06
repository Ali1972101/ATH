Add-Type -AssemblyName System.Drawing

$img1Path = "C:\Users\HP\.gemini\antigravity-ide\brain\dfeb0a85-7b1c-4251-b010-74467837c0c8\media__1786024544572.png"
$bmp1 = [System.Drawing.Bitmap]::FromFile($img1Path)

Write-Host "Image 1 Dimensions: $($bmp1.Width) x $($bmp1.Height)"

# Crop Row 0 items with exact coordinates
# Col 0 (JS): x=20, y=80, w=115, h=65
# Col 1 (HTML): x=178, y=80, w=115, h=65
# Col 2 (CSS): x=335, y=80, w=115, h=65

$bmp1.Dispose()
