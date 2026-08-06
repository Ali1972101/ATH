Add-Type -AssemblyName System.Drawing

$img1Path = "C:\Users\HP\.gemini\antigravity-ide\brain\dfeb0a85-7b1c-4251-b010-74467837c0c8\media__1786024544572.png"
$outDir = "c:\Users\HP\Desktop\programming\mysite\mysite\src\assets\tech_icons"

$bmp1 = [System.Drawing.Bitmap]::FromFile($img1Path)

function Crop-Image($bmp, $x, $y, $w, $h, $outFile) {
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $cropped = $bmp.Clone($rect, $bmp.PixelFormat)
    $cropped.Save($outFile, [System.Drawing.Imaging.ImageFormat]::Png)
    $cropped.Dispose()
    Write-Host "Restored $outFile"
}

# Crop JS and CSS directly from original screenshot
Crop-Image $bmp1 20 80 115 65 "$outDir\js.png"
Crop-Image $bmp1 335 80 115 65 "$outDir\css.png"

$bmp1.Dispose()
