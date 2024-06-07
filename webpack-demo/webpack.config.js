const path = require('path');

module.exports = {
  entry: './src/indexwb.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};