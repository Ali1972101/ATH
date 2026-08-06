Add-Type -AssemblyName System.Drawing

$img1Path = "C:\Users\HP\.gemini\antigravity-ide\brain\dfeb0a85-7b1c-4251-b010-74467837c0c8\media__1786024544572.png"
$img2Path = "C:\Users\HP\.gemini\antigravity-ide\brain\dfeb0a85-7b1c-4251-b010-74467837c0c8\media__1786024550494.png"

$outDir = "c:\Users\HP\Desktop\programming\mysite\mysite\src\assets\tech_icons"
if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir | Out-Null
}

$bmp1 = [System.Drawing.Bitmap]::FromFile($img1Path)
$bmp2 = [System.Drawing.Bitmap]::FromFile($img2Path)

function Crop-Image($bmp, $x, $y, $w, $h, $outFile) {
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $cropped = $bmp.Clone($rect, $bmp.PixelFormat)
    $cropped.Save($outFile, [System.Drawing.Imaging.ImageFormat]::Png)
    $cropped.Dispose()
    Write-Host "Saved $outFile"
}

# Image 1 Items (Languages & Frameworks)
Crop-Image $bmp1 20 80 115 65 "$outDir\js.png"
Crop-Image $bmp1 178 80 115 65 "$outDir\html.png"
Crop-Image $bmp1 335 80 115 65 "$outDir\css.png"

Crop-Image $bmp1 20 220 115 65 "$outDir\tailwind.png"
Crop-Image $bmp1 178 220 115 65 "$outDir\scss.png"
Crop-Image $bmp1 335 220 115 65 "$outDir\react.png"

Crop-Image $bmp1 20 360 115 65 "$outDir\express.png"
Crop-Image $bmp1 178 360 115 65 "$outDir\node.png"
Crop-Image $bmp1 335 360 115 65 "$outDir\reactnative.png"

Crop-Image $bmp1 20 500 115 65 "$outDir\vue.png"
Crop-Image $bmp1 178 500 115 65 "$outDir\nuxt.png"
Crop-Image $bmp1 335 500 115 65 "$outDir\next.png"

Crop-Image $bmp1 20 640 115 65 "$outDir\bootstrap.png"

# Image 2 Items (Tools & Platforms - corrected Y positions)
# Row 0: Git, GSAP, Framer Motion
Crop-Image $bmp2 20 360 115 65 "$outDir\git.png"
Crop-Image $bmp2 178 360 115 65 "$outDir\gsap.png"
Crop-Image $bmp2 335 360 115 65 "$outDir\framer.png"

# Row 1: MongoDB, NPM, Vercel
Crop-Image $bmp2 20 500 115 65 "$outDir\mongodb.png"
Crop-Image $bmp2 178 500 115 65 "$outDir\npm.png"
Crop-Image $bmp2 335 500 115 65 "$outDir\vercel.png"

# Row 2: Google Cloud Services, Redux, Prisma
Crop-Image $bmp2 20 640 115 65 "$outDir\gcloud.png"
Crop-Image $bmp2 178 640 115 65 "$outDir\redux.png"
Crop-Image $bmp2 335 640 115 65 "$outDir\prisma.png"

# Row 3: Haystack
Crop-Image $bmp2 20 780 115 65 "$outDir\haystack.png"

$bmp1.Dispose()
$bmp2.Dispose()
