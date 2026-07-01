const fs = require('fs');
const path = require('path');

const packageJson = require('../package.json');

const buildInfo = `
// This file is auto-generated.
// Do not edit manually.

export const BUILD_INFO = {
  version: '${packageJson.version}',
  buildDate: '${new Date().toISOString()}'
} as const;
`;

const outputPath = path.join(
  __dirname,
  '../src/app/core/build-info.ts'
);

fs.writeFileSync(outputPath, buildInfo);

console.log('✓ Generated build-info.ts');