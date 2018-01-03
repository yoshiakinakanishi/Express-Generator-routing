var express = require('express');
var router = express.Router();

// hello/index
router.get('/', (req, res, next) => {
  var data = {
      title: 'Hello',
      content: '3ページ目を追加してみた',
      link: {href:'/', text:'TOPへ'}
  };    
           
  res.render('hello/index', data);
});

// hello/hoge
router.get('/hoge', (req, res, next) => {
  var data = {
      title: 'hoge',
      content: '4ページ目を追加してみた',
      link: {href:'/', text:'TOPへ'}
  };    
           
  res.render('hello/hoge', data);
});

module.exports = router;