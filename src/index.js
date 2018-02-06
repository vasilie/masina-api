import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import auth from './routes/auth';

const app = express();
mongoose.connect("mongodb://localhost/masina");

app.use(bodyParser.json());
app.use('/api/auth', auth);

app.get('/*', (req, res) =>{
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(8080, () => console.log("Running on localhost:8080"));
