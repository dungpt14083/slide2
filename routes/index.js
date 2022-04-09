var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' ,message:' '});
});
var fs1 = require('fs')
router.get('/home', function(req, res, next) {
  var name = "Tien Dung"
  var tuoi = 8
  var array = [1,43,23,24,65,46,87]
  var SinhVien = {name:"Tien Dung",sdt:"0914707821"}
  var danhsach = [
    {name:'Hoang Anh',sdt:'0956123789'},
    {name:'Hoang Anh',sdt:'0956123789'},
    {name:'Hoang Anh',sdt:'0956123789'},
    {name:'Hoang Anh',sdt:'0956123789'}
  ]
  var thongtin ={
    name:'Dung Pham',sdt:'09768767221',
    danhsach : [
      {name:'Hoang Anh',sdt:'0956123789'},
      {name:'Hoang Anh',sdt:'0956123789'},
      {name:'Hoang Anh',sdt:'0956123789'},
      {name:'Hoang Anh',sdt:'0956123789'}
    ]
  }
  var data1 = fs1.readFile('luutru/data.txt');




  res.render('cantegori', { title: 'Home' ,message:' ',name: name,tuoi: tuoi,array: array,SinhVien: SinhVien,danhsach: danhsach,thongtin: thongtin,data1:data1});
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
  fs.readFile('luutru/'+data+'.txt' ,function (error)
  {
    var message = ""
    if(error)
    {
      message = error
    }else {
      message="Chúng tôi đã nhận được phản hồi từ bạn"

    }
    // var data = fs.readFileSync('luutru/data.txt');

    response.render('about',{title:'ok',message:message})
  })

});


var db = 'mongodb+srv://admin:dungptph14083@cluster0.eyag6.mongodb.net/DungPham?retryWrites=true&w=majority'
const mongoose = require('mongoose');
mongoose.connect(db).catch(error => {
  console.log("co loi xay ra" + error)
});
router.get('/car',function (reg,res){
  var danhSach = Car.find({},function (err,data)
  {
    res.render('cars',{dulieu:data})
  })
})
var carSchena = new mongoose.Schema(
    {
      maXe:'string',
      giaXe:'string'
    }
)
var Car = mongoose.model('car',carSchena);
router.post('/car', function(req, res, next) {

  var maXe = reg.body.maXe
  var giaXe =  reg.body.giaXe

  const Car =new Car({
    maXe: maXe,
    giaXe: giaXe
  })
  car.save(function (error){
    var mess;
    if(error==null)
    {
      mess = 'Them Thanh cong'
    }else {
      mess = error
    }
    console.log(maXe+giaXe)
    res.render('cars');
  })



});
const multer1 = require('multer')
const upload1 = multer1({dest:'upload/'})
router.get('/upload', function(req, res, next) {
  res.render('upload', { title: 'Upload',message:' ' });
});
router.post('/upload',upload1.array('avatar',12),function (reg,res,){
  res.render('upload',{message:'tải file thành công!'})
    }
)
const fslab4 = require('fs');
router.get('/lab4',function (reg,res,){
  fslab4.readFile('luutru/data.txt',function (err,datalab4){

    if(err)
    {
      res.render('lab4',{message: err});

    }else {
      const dulieu = JSON.parse(datalab4);
      res.render('lab4',{datalab4:dulieu})
    }
  });
    }

);



module.exports = router;
