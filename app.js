// 引入express框架
const express = require('express');
// 引用express-handlebars模板引擎
const exphbs = require('express-handlebars');
// 引用path模块 用于处理路径
const path = require('path');




// 创建web服务器
const app = express();

// 开放静态资源目录
app.use(express.static(path.join(__dirname, 'public')));

// 告诉express项目所使用的模板引擎是哪个 配置模板引擎
app.engine('handlebars', exphbs({
    partialsDir: [
    {
        dir: path.join(__dirname, 'views', 'home', 'partials'),
        namespace: 'home'
    },
    {
        dir: path.join(__dirname, 'views', 'admin', 'partials'),
        namespace: 'admin'
    }],
    // 模板架构所在目录
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    // 渲染模板时默认使用
    defaultLayout: 'home'

}));
// 指定模板的目录
app.set('views',path.join(__dirname, 'views'));

// 指定模板后缀
app.set('view engine', 'handlebars');

// 导入前端路由模块 返回前端路由一级模块对象
const home = require('./routes/home.js');

// 导入后端路由模块 返回前端路由一级模块对象
const admin = require('./routes/admin.js');

// 当有请求来的时候 如果请求以 /home 走前端路由
app.use('/home', home);
// 当有请求来的时候 如果请求以 /admin 走后端路由
app.use('/admin', admin);

// 文章添加页路由
admin.get('/add', (req, res) => {
    res.render('admin/add', {
        layout: 'admin'
    });
});

// 文章列表路由
admin.get('/list', (req, res) => {
    res.render('admin/list', {
        layout: 'admin'
    });
})

// 让服务器监听3000端口 向外界提供服务
app.listen(3000, err => {
    if (err == null) {
        console.log('服务启动成功，请访问http://localhost:3000');
    };
});