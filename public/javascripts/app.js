angular.module("app",[])
	.controller('UsersController', function($scope, $http){

		console.log('Carregando UsersController...');

		$scope.mensagem = "Olá mundo! ";

		

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