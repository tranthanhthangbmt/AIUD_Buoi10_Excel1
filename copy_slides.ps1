
$sourceDir = "..\..\SlideHuongDan\slide word_Buổi 1"
$destDir = "assets\slides"
$logFile = "copy_log.txt"

Start-Transcript -Path $logFile -Append

Write-Output "Starting copy operation..."
Write-Output "Source: $sourceDir"
Write-Output "Dest: $destDir"

if (-not (Test-Path $destDir)) {
    Write-Output "Creating destination directory..."
    New-Item -ItemType Directory -Path $destDir -Force
}

$files = Get-ChildItem -Path $sourceDir -Filter "*.png"
Write-Output "Found $($files.Count) files."

foreach ($file in $files) {
    try {
        # slide word_Buổi 1_1.png -> slide_1.png
        $parts = $file.Name.Replace(".png", "").Split("_")
        $number = $parts[-1]
        $newName = "slide_$number.png"
        
        $destPath = Join-Path -Path $destDir -ChildPath $newName
        
        Copy-Item -Path $file.FullName -Destination $destPath -Force
        Write-Output "Copied $($file.Name) to $newName"
    }
    catch {
        Write-Error "Failed to copy $($file.Name): $_"
    }
}

Stop-Transcript
