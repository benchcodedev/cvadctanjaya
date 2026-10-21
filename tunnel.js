import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const ROOT = path.dirname(__filename);
const URL_FILE = path.join(ROOT, 'public-url.txt');

console.log('[TUNNEL] Starting SSH tunnel to localhost.run for port 8080...');

function startTunnel() {
  const args = [
    '-o', 'StrictHostKeyChecking=no',
    '-o', 'UserKnownHostsFile=/dev/null',
    '-o', 'ServerAliveInterval=25',
    '-o', 'ServerAliveCountMax=4',
    '-R', '80:localhost:8080',
    'nokey@localhost.run'
  ];

  const child = spawn('ssh', args, { stdio: ['ignore', 'pipe', 'pipe'] });

  child.stdout.on('data', (chunk) => {
    const text = chunk.toString();
    process.stdout.write(text);

    const match = text.match(/https:\/\/[a-zA-Z0-9.-]+\.lhr\.life/);
    if (match) {
      const publicUrl = match[0];
      fs.writeFileSync(URL_FILE, publicUrl, 'utf8');
      console.log('\n======================================================');
      console.log(`[TUNNEL READY] LIVE PUBLIC URL FOR MOBILE:`);
      console.log(publicUrl);
      console.log(`QR CODE URL: https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(publicUrl)}`);
      console.log('======================================================\n');
    }
  });

  child.stderr.on('data', (chunk) => {
    const text = chunk.toString();
    // Filter noise
    if (!text.includes('Pseudo-terminal will not be allocated')) {
      process.stderr.write(text);
    }
  });

  child.on('close', (code) => {
    console.log(`[TUNNEL] SSH tunnel closed with code ${code}. Reconnecting in 3s...`);
    setTimeout(startTunnel, 3000);
  });

  child.on('error', (err) => {
    console.error(`[TUNNEL ERROR]`, err);
    setTimeout(startTunnel, 3000);
  });
}

startTunnel();
