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

router.post('/', function(req, res, next) {

  //usuarios.push(req.body);
  var newUser = new User(req.body);
  newUser.save(function(error, results){
  	res.json({
  		message:"Sucesso!"
  	});

  }); //insere no mongo

  

});

module.exports = router;
