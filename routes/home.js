const express = require('express');
// 创建前端的一级路由
const home = express.Router();

// 当客户端以get方式请求 / 的时候
home.get('/', (req, res) => {
    res.render('home/index');
});

home.get('/about', (req, res) => {
    res.render('home/about');
});

home.get('/join', (req, res) => {
    res.render('home/join');
});

home.get('/register', (req, res) => {
    res.render('home/register');
});

home.get('/login', (req, res) => {
    res.render('home/login');
});

module.exports = home;