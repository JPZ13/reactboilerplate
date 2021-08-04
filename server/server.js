const express = require( 'express' );
const hmr = require('webpack-hot-middleware')
const webpackDev = require('webpack-dev-middleware')
const routes = require( './routes/routes' );
const webpack = require('webpack')
const app = express();

const webpackConfig = require('../webpack.config')

const compiler = webpack(webpackConfig)


app.use(webpackDev(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath,
}))
app.use(hmr(compiler))

app.use( '/', routes );

app.use(express.static('dist'))

app.listen( process.env.PORT || 3000, () => {
  console.log( 'Express server live on port', process.env.PORT || 3000 );
});

module.exports = app;
