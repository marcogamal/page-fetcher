const request = require("request");
const fs = require("fs");

const domain = process.argv[2];
const path = process.argv[3];

request(domain, (error, response, body) => {
  if (error) {
    console.log("error:", error);
  }
  fs.writeFile(path, body, (err) => {
    if (err) throw err;
    console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
  });
});
