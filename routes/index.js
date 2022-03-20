var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' ,message:' '});
});
router.get('/home', function(req, res, next) {
  res.render('cantegori', { title: 'Home' ,message:' '});
});
router.get('/asia', function(req, res, next) {
  res.render('cantegori', { title: 'Asia' ,message:' '});
});
router.get('/euro', function(req, res, next) {
  res.render('cantegori', { title: 'Euro',message:' ' });
});
router.get('/america', function(req, res, next) {
  res.render('cantegori', { title: 'America',message:' ' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About',message: ' ' });
});
router.get('/hotview', function(req, res, next) {
  res.render('hot', { title: 'Hot' ,message: ' '});
});
var fs = require('fs')

router.post('/hotro',function (request,response) {
  var email = request.body.email
  var sdt = request.body.sdt
  var noidung = request.body.noidung
  fs.writeFile('luutru/' +email+'.txt',email+'-'+ noidung+'-'+sdt,function (error)
  {
    var message = ""
    if(error)
    {
      message = error
    }else {
      message="ok chung toi da nhan phan hoi"

    }
    response.render('about',{title:'ok',message:message})
  })

});

module.exports = router;
