const fs = require('fs');
const {resolve} = require('path');

module.exports = (app) => {
    fs
        .readdirSync(__dirname)
        .filter(file => (file.indexOf('.') !== 0 && file !== 'index.js'))
        .map(file => require(resolve(__dirname, file))(app));
}