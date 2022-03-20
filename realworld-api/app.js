const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const errorHandle = require('./middleware/error-handle');
const router = require('./router');

const app = express();
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());
app.use('/api', router);
app.use(errorHandle());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('app running localhost:3000');
});
