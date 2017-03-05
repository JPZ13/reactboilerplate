'use strict';

const express = require( 'express' );
const routes = require( './routes/routes' );

const app = express();

app.use( express.static( 'client' ));

app.use( '/', routes );

app.listen( process.env.PORT || 3000, () => {
  console.log( 'Express server live on port', process.env.PORT || 3000 );
});

module.exports = app;
