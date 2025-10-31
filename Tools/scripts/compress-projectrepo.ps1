function Compress-ProjectRepo {
    [CmdletBinding()]
    param(
        [string]$SourcePath = (Get-Location),
        [string]$ProjectName = "llp2"
    )

    # Save output in your Windows "Downloads" folder
    $OutputFolder = [Environment]::GetFolderPath("UserProfile") + "\Downloads"

    # File naming: project-status-YYYY-MM-DD.zip
    $date = Get-Date -Format "yyyy-MM-dd"
    $zipName = "$ProjectName-status-$date.zip"
    $zipPath = Join-Path $OutputFolder $zipName

    Write-Host "📦 Creating ZIP: $zipPath"
    Write-Host "🔍 Source: $SourcePath"

    # Folders/files to exclude
    $excludePatterns = @(
        "node_modules",
        ".next",
        "out",
        "dist",
        "coverage",
        ".git",
        ".vs",
        ".vscode",
        "*.log",
        "Thumbs.db"
    )

    # Collect files except excluded ones
    $filesToZip = Get-ChildItem -Path $SourcePath -Recurse -Force |
        Where-Object {
            $include = $true
            foreach ($pattern in $excludePatterns) {
                if ($_.FullName -like "*\$pattern*") { $include = $false; break }
            }
            return $include -and -not $_.PSIsContainer
        }

    # Ensure output folder exists
    if (-not (Test-Path $OutputFolder)) {
        New-Item -ItemType Directory -Path $OutputFolder | Out-Null
    }

    # Remove old zip if same name exists
    if (Test-Path $zipPath) {
        Remove-Item $zipPath -Force
    }

    # Temporary copy before compressing
    $tempFolder = Join-Path ([System.IO.Path]::GetTempPath()) "$ProjectName-temp"
    if (Test-Path $tempFolder) { Remove-Item $tempFolder -Recurse -Force }
    New-Item -ItemType Directory -Path $tempFolder | Out-Null

    foreach ($file in $filesToZip) {
        $dest = Join-Path $tempFolder ($file.FullName.Substring($SourcePath.Length + 1))
        $destDir = Split-Path $dest
        if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Path $destDir | Out-Null }
        Copy-Item $file.FullName $dest
    }

    Compress-Archive -Path "$tempFolder\*" -DestinationPath $zipPath -Force
    Remove-Item $tempFolder -Recurse -Force

    Write-Host "✅ ZIP created successfully at: $zipPath"

    # Optional: open the Downloads folder automatically
    Start-Process "explorer.exe" $OutputFolder
}

# Shortcut alias for convenience
Set-Alias -Name ziprepo -Value Compress-ProjectRepo
