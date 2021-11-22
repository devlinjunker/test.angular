const fs = require('fs');
const path = require('path');

const express = require('express');

// TODO: For proxying requests to API server during development
// const proxy = require('express-http-proxy');

// TODO: could be dynamic
let BUILD_DIR = './dist';

if (process.argv.includes('--prod')) {
    console.log("PROD MODE");
    BUILD_DIR += '/aot';
}

const PORT = 3333;

const app = express();

if ( !fs.existsSync(BUILD_DIR) ) {
  throw new Error(`Build directory (${BUILD_DIR}) doesn't exist`);
}

app.use(express.static(BUILD_DIR));

// // Send index file for all other requests
// app.get('/*', (req, res, next) => {
//   // Do not serve HTML files
//   // ALL Angular HTML is preloaded on the page, if it's asking for a template via AJAX something is wrong
//   if (req.url.indexOf('.html') !== -1) {
//     return next();
//   }

//   res.sendFile(path.resolve(path.join(staticDir, '/index.html')));
// });


app.listen(PORT);

console.log(`Starting Dev UI Server on port ${PORT}`);