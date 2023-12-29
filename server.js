// mongodb+srv://faraz40:<password>@cluster0.hx3za2o.mongodb.net/?retryWrites=true&w=majority

import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/route.js';
import security from './middleWare/security.js';
import fileUpload from 'express-fileupload';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.use(fileUpload());
app.use('/api/v1', security, routes);

mongoose
  .connect(
    'mongodb+srv://faraz40:Faraz4020@cluster0.hx3za2o.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => app.listen(8000))
  .then(
    console.log(`CONNECTED TO DATABASE AND LISTENING TO PORT localhost:${8000}`)
  )
  .catch((err) => console.log('ERROR CONECTION TO DATABASE', err));
