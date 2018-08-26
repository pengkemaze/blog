const express = require('express');

// 创建后端的一级路由
const admin = express.Router();


// 文章索引页路由
admin.get('/index', (req, res) => {
    res.render('admin/index', {
        layout: 'admin'
    });
});

module.exports = admin;