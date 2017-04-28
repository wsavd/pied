import express from 'express';
const app = express();

//db
import mongoose from 'mongoose'
mongoose.Promise = global.Promise;
const db = "mongodb://qiandongyq:123456q@ds129010.mlab.com:29010/notepad";
mongoose.connect(db)
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

import routes from './routes/main.routes';

app.use('/api/v1', routes);

app.set('port', (process.env.PORT || 5000))
// arrow functions
app.listen(app.get('port'), () => {
  console.log("Node app is running at localhost:" + app.get('port'))
})
