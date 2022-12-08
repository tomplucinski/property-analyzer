import express, { NextFunction, Request, Response } from 'express';

const app = express();
const PORT = 5000; 

app.get("/api", (req, res) => {
  return res.json("API is up!");
});

app.listen(PORT, () => {console.log(`server listening on PORT: ${PORT}`)});