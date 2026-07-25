const { execSync } = require('child_process');
process.env.SURGE_LOGIN = 'tour2027demo@gmail.com';
process.env.SURGE_TOKEN = '68c788647a46faedcfb50a221f72a6b2';

try {
  console.log("Publishing app to Surge CDN...");
  const output = execSync('npx -y surge ./ nagoya-tour-2027.surge.sh', { encoding: 'utf-8' });
  console.log(output);
} catch (e) {
  console.error("Deploy output:", e.stdout || e.message);
}
