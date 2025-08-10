import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    // 1) Allow Next to trace files outside apps/web (monorepo)
  outputFileTracingRoot: path.resolve(__dirname, '../../'),

  // 2) Tell Turbopack what you consider the project root (absolute path)
  turbopack: {
    root: path.resolve(__dirname, '../../'),
  },
};

export default nextConfig;
