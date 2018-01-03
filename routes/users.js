var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.send('2ページ目を追加してみた～(＾ω＾)');
});

module.exports = router;
