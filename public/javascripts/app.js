angular.module("app",[])
	/*.controller('LoginController', function($scope, $http){
		$scope.logar = function(){
			$http.post('/users/login',$scope.login).success(function(response){

			})
		}

	})*/

	.controller('UsersController', function($scope, $http){

		console.log('Carregando UsersController...');

		$scope.mensagem = "Olá mundo! ";

		$scope.pessoa = {
			"nome":"Giovanna",
			"idade":16,
			"email":"giovanna.batalha03@gmail.com"
		}

		$scope.usuarioSendoAdicionado = {
			"name":"Lula"
		}		

		$scope.load = function(){
			$http.get('/users').success(function(response){
				console.log(response);
				$scope.users = response;
			});
		};

		$scope.add = function(){
			console.log("Adicionando usuário", $scope.usuarioSendoAdicionado);
			$http.post('/users', $scope.usuarioSendoAdicionado).success(function(response){
				console.log(response);
				$scope.load();
			});
		};

		$scope.load();


		


	});