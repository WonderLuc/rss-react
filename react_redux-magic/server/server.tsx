import express from 'express';
import cors from 'cors';
import ReactDOMServer from 'react-dom/server';
import React from 'react';

const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());

app.get('/', (req, res) => {
  console.log(req.url);
  res.send('<h1>Hello</h1>');
});

app.listen(PORT, () => {
  console.log(`start on ${PORT}`);
});
