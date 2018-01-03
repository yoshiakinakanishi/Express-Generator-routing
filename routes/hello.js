var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  var data = {
      title: 'Hello',
      content: '3ページ目を追加してみた'
  };    
           
  res.render('hello/index', data);
});

router.get('/hoge', (req, res, next) => {
  var data = {
      title: 'hoge',
      content: '4ページ目を追加してみた'
  };    
           
  res.render('hello/hoge', data);
});

module.exports = router;