{
  "name": "%APP%",
  "version": "%VERSION%",
  "description": "An awesome Rune-based application.",
  "main": "bin/bootstrap.js",
  "directories": {
    "lib": "lib"
  },
  "scripts": {
    "test": "electron ./bin-debug/bootstrap.js",
    "start": "electron ./bin/bootstrap.js",
    "build": "cd ./scripts/shell/ && ./make.sh"
  },
  "author": "Uncredited Rune developer",
  "license": "MIT",
  "devDependencies": {
    "google-closure-compiler": "*",
    "jsdoc": "*",
    "electron": "*"
  }
}