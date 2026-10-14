$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot
if (!(Test-Path -LiteralPath 'node_modules/next/dist/bin/next')) {
    Write-Host 'Run npm ci first to install the locked dependencies, then run this launcher again.'
    exit 1
}
if (!(Test-Path -LiteralPath '.next-release/BUILD_ID')) {
    npm run build
    if ($LASTEXITCODE -ne 0) { throw 'Preview build failed.' }
}
Write-Host 'Full design preview: http://127.0.0.1:5242/en'
node node_modules/next/dist/bin/next start --hostname 127.0.0.1 --port 5242
