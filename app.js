var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// 开发环境或者部署
var dev = 'routes';
var pre = 'dist';
var this_dev = pre;

// 页面配置文件
var index = require('./' + this_dev + '/index'); // pc首页
var xiaoshuo_web_index = require('./' + this_dev + '/xiaoshuo/index.js'); // 小说
var users = require('./' + this_dev + '/users');
// 接口配置文件
var web_index = require('./' + this_dev + '/web_link/index'); // pc首页
var xiaoshuo_json = require('./' + this_dev + '/xiaoshuo/index_json.js'); // 小说
var hbuilderAppJsonIndex = require('./' + this_dev + '/hbuilderAppJsonIndex');
var hbuilderAppJson = require('./' + this_dev + '/hbuilderAppJson');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.set(header('Access-Control-Allow-Origin:*'));
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "*");
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    // res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1')
//     if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
//     else  next();
// });
var hostType = 'www';
app.use((req, res, next)=>{
  try {
    var host = req.host.split('.')[0];
    hostType = host ? host : 'www';
    if (hostType === 'www') {
      index(req, res, next)
    } else if (hostType === 'xiaoshuo') {
      xiaoshuo_web_index(req, res, next)
    } else {
      users(req, res, next)
    }
  } catch (error) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  }
});

// app.use('/', index);
// app.use('/users', users);

// 线上要部署的页面请求
app.use('/web/index', web_index);

// 小说页面请求
app.use('/xiaoshuo', xiaoshuo_json);

// app请求
app.use('/appData', hbuilderAppJsonIndex);
app.use('/app', hbuilderAppJson);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
