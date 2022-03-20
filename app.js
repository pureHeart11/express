const express = require('express');
const morgan = require('morgan');
const router = require('./router');

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(morgan('tiny')); // http请求日志

// app.use('/lyq', router); //给路由限定前缀
app.use(router); // 挂载路由

// 通常在所有路由之后配置处理 404 的内容
app.use((req, res, next) => {
  res.status(404).send('404 Not Found');
});

// 在所有中间件之后挂载错误处理中间件（参数4个不可少）
app.use((err, req, res, next) => {
  res.status(500).json({
    err: err.message
  });
});

app.listen(3000, () => {
  console.log('app running http://localhost:3000');
});
