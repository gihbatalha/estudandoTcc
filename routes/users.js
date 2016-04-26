var express = require('express');
var router = express.Router();
var User   = require('../app/models/user.js');
var usuarios = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  /*var usuario = {
  	name:"Guilherme",
  	idade: 28
  };
  /*usuarios = [{name:"Giovanna", idade:16}];*/	
  /*usuarios.push(usuario);*/

  //res.json(usuarios);

  User.find(function(error, results){
  		res.json(results);
  });
});




// /users/find?name=giovanna     -- exemplo de chamada
router.get('/find', function(req, res, next){
    User.findOne({name:req.query.name}, function(error, result){
        res.json(result);
    });

});


router.post('/login', function(req, res, next){
    User.findOne({name:req.body.usuario}, function(error, result){
      console.log(result[0]);
        if(result.senha === req.body.senha){
          res.redirect('/');
        }else{
            res.redirect('/login');

        }


    });

    console.log("Passou por aqui : ", req.body);
   // res.redirect('/');

});


router.post('/', function(req, res, next) {

  //usuarios.push(req.body);
  console.log(req.body);
  var newUser = new User(req.body);
  newUser.save(function(error, results){
  	res.json({
  		message:"Sucesso!"
  	});

  }); //insere no mongo  

});

module.exports = router;
