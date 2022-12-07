import express, { NextFunction, Request, Response } from 'express';

const app = express();
const PORT = 5000; 

app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

app.listen(PORT, () => {console.log(`server listening on PORT: ${PORT}`)});