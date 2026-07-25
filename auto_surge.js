const { spawn } = require('child_process');

const npxCmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const surge = spawn(npxCmd, ['surge', './', 'nagoya2026-luxury-tour.surge.sh'], {
  stdio: ['pipe', 'pipe', 'pipe']
});

surge.stdout.on('data', (data) => {
  const str = data.toString();
  console.log('[Surge Out]:', str);

  if (str.includes('email:')) {
    surge.stdin.write('nagoyatrip2026demo@gmail.com\n');
  } else if (str.includes('password:')) {
    surge.stdin.write('Nagoya2026!Pass\n');
  }
});

surge.stderr.on('data', (data) => {
  console.error('[Surge Err]:', data.toString());
});

surge.on('close', (code) => {
  console.log(`Surge process exited with code ${code}`);
});
