function Compress-ProjectRepo {
    [CmdletBinding(SupportsShouldProcess = $true)]
    param(
        [string]$SourcePath = (Get-Location),
        [string]$ProjectName = "llp2",
        [string]$OutputFolder,
        [string]$Label
    )

    $ErrorActionPreference = "Stop"

    try {
        if (-not $OutputFolder -or $OutputFolder.Trim() -eq "") {
            $OutputFolder = Join-Path ([Environment]::GetFolderPath("UserProfile")) "Downloads"
            Write-Host "Output folder not provided. Using Downloads: $OutputFolder"
        } else {
            Write-Host "Using custom output folder: $OutputFolder"
        }

        if (-not (Test-Path -LiteralPath $SourcePath)) { throw "Source path not found: $SourcePath" }
        $SourcePath = (Resolve-Path -LiteralPath $SourcePath).Path
        Write-Host "Source path: $SourcePath"

        if (-not (Test-Path -LiteralPath $OutputFolder)) {
            if ($PSCmdlet.ShouldProcess($OutputFolder, "Create output folder")) {
                New-Item -ItemType Directory -Path $OutputFolder -Force | Out-Null
                Write-Host "Created output folder: $OutputFolder"
            }
        } else {
            Write-Host "Output folder exists: $OutputFolder"
        }

        $date = Get-Date -Format "yyyy-MM-dd"
        $suffix = $(if ($Label) { "-$Label" } else { "" })
        $zipName = "$ProjectName-status-$date$suffix.zip"
        $zipPath = Join-Path $OutputFolder $zipName
        Write-Host "ZIP will be created as: $zipPath"

        $excludeDirs = @('node_modules', '.next', 'out', 'dist', 'coverage', '.git', '.vs', '.vscode')
        $excludeFilePatterns = @('*.log', 'Thumbs.db')
        Write-Host "Excluding directories: $($excludeDirs -join ', ')"
        Write-Host "Excluding file patterns: $($excludeFilePatterns -join ', ')"

        Write-Host "Scanning files..."
        $allFiles = Get-ChildItem -Path $SourcePath -Recurse -Force -File

        $filesToZip = $allFiles | Where-Object {
            $full = $_.FullName
            $rel  = $full.Substring($SourcePath.Length).TrimStart('\','/')
            # ✅ robust split on both slash and backslash
            $segments = $rel -split '[\\/]+'

            # directory exclude: if any segment equals an excluded dir, skip
            if ($segments | Where-Object { $excludeDirs -contains $_ }) {
                return $false
            }

            # file pattern excludes
            foreach ($pat in $excludeFilePatterns) {
                if ($_.Name -like $pat) { return $false }
            }
            return $true
        }

        $count = ($filesToZip | Measure-Object).Count
        if ($count -eq 0) { throw "No files found to include (after exclusions)." }
        Write-Host "Files to include: $count"

        if (Test-Path -LiteralPath $zipPath) {
            if ($PSCmdlet.ShouldProcess($zipPath, "Remove existing zip")) {
                Remove-Item -LiteralPath $zipPath -Force
                Write-Host "Removed existing ZIP with same name."
            }
        }

        $tempRoot = [System.IO.Path]::GetTempPath()
        $staging  = Join-Path $tempRoot "$ProjectName-zip-staging-$([guid]::NewGuid().ToString('N'))"
        if ($PSCmdlet.ShouldProcess($staging, "Create staging folder")) {
            New-Item -ItemType Directory -Path $staging -Force | Out-Null
            Write-Host "Created staging folder: $staging"
        }

        Write-Host "Copying files into staging..."
        $sourcePrefixLen = $SourcePath.TrimEnd('\','/').Length + 1
        foreach ($file in $filesToZip) {
            $relative = $file.FullName.Substring($sourcePrefixLen)
            $dest     = Join-Path $staging $relative
            $destDir  = Split-Path $dest -Parent
            if (-not (Test-Path -LiteralPath $destDir)) {
                New-Item -ItemType Directory -Path $destDir -Force | Out-Null
            }
            Copy-Item -LiteralPath $file.FullName -Destination $dest -Force
        }
        Write-Host "Staging complete."

        Write-Host "Creating ZIP..."
        Compress-Archive -Path (Join-Path $staging '*') -DestinationPath $zipPath -Force
        Write-Host "ZIP created: $zipPath"

        if ($PSCmdlet.ShouldProcess($staging, "Remove staging folder")) {
            Remove-Item -LiteralPath $staging -Recurse -Force
            Write-Host "Cleaned up staging folder."
        }

        Start-Process "explorer.exe" $OutputFolder | Out-Null
        Write-Host "Opened output folder."
    }
    catch {
        Write-Error ("ZIP creation failed: " + $_.Exception.Message)
        return
    }
}

Set-Alias -Name ziprepo -Value Compress-ProjectRepo
