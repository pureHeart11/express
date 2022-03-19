const express = require('express');
const router = require('./router');

const app = express();

app.use(express.json());
app.use(express.urlencoded());
// app.use('/lyq', router); //添加前缀
app.use(router);

app.listen(3000, () => {
  console.log('app running http://localhost:3000');
});
