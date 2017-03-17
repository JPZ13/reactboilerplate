'use strict';

const express = require( 'express' );
const router = express.Router();
const path = require( 'path' );

router.get( '/', ( req, res ) => {
  res.status( 200 ).sendFile('index.html', { root: path.join( __dirname, '../../client' )});
});

module.exports = router;
