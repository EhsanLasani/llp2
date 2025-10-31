function Invoke-GitCommitPush {
    [CmdletBinding()]
    param(
        [string]$Message,
        [string]$Remote = "origin",
        [string]$Branch
    )

    $ErrorActionPreference = "Stop"

    # Determine local branch safely
    $LocalRef = (git rev-parse --abbrev-ref HEAD).Trim()
    if (-not $Branch -or $Branch -eq "") { $Branch = $LocalRef }

    # If detached HEAD, figure out a target branch name
    if ($Branch -eq "HEAD") {
        # Try to detect the remote’s default branch
        $remoteHead = ""
        try {
            $remoteHead = (git remote show $Remote | Select-String "HEAD branch" | ForEach-Object {
                $_.ToString().Split(":")[-1].Trim()
            })
        } catch { }

        if (-not $remoteHead) { $remoteHead = "main" }  # sensible default
        $TargetBranch = $remoteHead
    } else {
        $TargetBranch = $Branch
    }

    # Commit message prompt if missing
    if (-not $Message) {
        do { $Message = Read-Host "Commit message" } while (-not $Message)
    }

    # Stage + commit if there are changes
    git add -A | Out-Null
    git diff --cached --quiet
    $hasStagedChanges = ($LASTEXITCODE -ne 0)
    if ($hasStagedChanges) {
        git commit -m $Message | Out-Null
    } else {
        Write-Host "No staged changes after adding. Skipping git commit."
    }

    # Ensure remote exists
    $remoteUrl = ""
    try { $remoteUrl = (git remote get-url $Remote 2>$null).Trim() } catch { }
    if (-not $remoteUrl) {
        $newRemote = Read-Host "Remote '$Remote' not found. Enter remote URL to add (leave empty to skip push)"
        if ($newRemote) {
            git remote add $Remote $newRemote | Out-Null
        } else {
            Write-Host "Skipping push because remote is not configured."
            return
        }
    }

    # Push appropriately
    if ($Branch -eq "HEAD") {
        # Detected detached HEAD → push commit to a named branch on remote
        git push -u $Remote "HEAD:refs/heads/$TargetBranch" | Out-Null
    } else {
        # On a named local branch
        # If upstream is missing, -u will set it; otherwise it’s harmless.
        git push -u $Remote $TargetBranch | Out-Null
    }

    Write-Host "Pushed to $Remote/$TargetBranch"
}

Set-Alias -Name gcp -Value Invoke-GitCommitPush
