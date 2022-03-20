const express = require('express');
const { login, register, getLoginUser, updateLoginUser } = require('../controller/user');

const router = express.Router();

// 用户登录
router.post('/users/login', login);

// 用户注册
router.post('/users', register);

// 获取登录用户
router.get('/user', getLoginUser);

// 更新登录用户
router.put('/user', updateLoginUser);

module.exports = router;
