Stop-Process -Name "node", "cloudflared" -ErrorAction SilentlyContinue
Start-Process -FilePath "node" -ArgumentList "server.js" -WorkingDirectory $PSScriptRoot -WindowStyle Hidden
Start-Sleep -Seconds 2
npx tunnelmole 8085
