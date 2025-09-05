const fs = require('fs');
const path = require('path')
const info = require('../public/info.json');

fs.cpSync(
    path.resolve(__dirname, '../dist/MaraxsisNoBaseQuality'),
    process.env.APPDATA + '/Factorio/mods/MaraxsisNoBaseQuality_' + info.version,
    { recursive: true });