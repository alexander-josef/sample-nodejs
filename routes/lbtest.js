var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log("lbtest router ---")

  let resBody = `respond with a resource -- req IP :  ${req.ip}
  header X-Forwarded-For : ${req.header('X-Forwarded-For')}`;
  res.send(resBody);
});

module.exports = router;
