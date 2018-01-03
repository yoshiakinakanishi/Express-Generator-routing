var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {

  var data = {
      title: 'Index',
      content: '1ページ目を追加してみた'
  };    
           
  res.render('index', data);
});

module.exports = router;