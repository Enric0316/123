const { spawn } = require('child_process');
const fs = require('fs');

// 先備份舊 index.html
fs.copyFileSync('./index.html', './index_backup.html');
// 將 codepen_loader.html 覆蓋為 index.html
fs.copyFileSync('./codepen_loader.html', './index.html');

const npxCmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const surge = spawn(npxCmd, ['surge', './', 'nagoya2027-app.surge.sh'], {
  stdio: ['pipe', 'pipe', 'pipe']
});

surge.stdout.on('data', (data) => {
  const str = data.toString();
  console.log('[Surge Loader Out]:', str);

  if (str.includes('email:')) {
    surge.stdin.write('nagoyatrip2026demo@gmail.com\n');
  } else if (str.includes('password:')) {
    surge.stdin.write('Nagoya2026!Pass\n');
  }
});

surge.on('close', (code) => {
  // 還原 index.html
  fs.copyFileSync('./index_backup.html', './index.html');
  fs.unlinkSync('./index_backup.html');
  console.log(`Deploy finished code: ${code}`);
});
