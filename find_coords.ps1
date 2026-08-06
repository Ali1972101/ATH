Add-Type -AssemblyName System.Drawing

$img2Path = "C:\Users\HP\.gemini\antigravity-ide\brain\dfeb0a85-7b1c-4251-b010-74467837c0c8\media__1786024550494.png"
$bmp2 = [System.Drawing.Bitmap]::FromFile($img2Path)

Write-Host "Image 2 Dimensions: $($bmp2.Width) x $($bmp2.Height)"

# Scan vertical Y lines to find non-white background blocks
for ($y = 0; $y -lt $bmp2.Height; $y += 20) {
    $p = $bmp2.GetPixel(70, $y)
    Write-Host "Y=$y : R=$($p.R) G=$($p.G) B=$($p.B)"
}

$bmp2.Dispose()
