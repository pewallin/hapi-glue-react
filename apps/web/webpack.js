const Path = require('path');


module.exports = {
    entry: Path.join(__dirname, './client.js'),
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        filename: Path.join(__dirname, '../../public/client.js')
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }
};
