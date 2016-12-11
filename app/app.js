angular.module("myApp",[])
.directive("marcopolo", ["marcopoloService", function(marcopoloService){
	return {
		restrict:"E", 
		replace:true, 
		template:'<p>{{marcopolo}}</p>', 
		controller:function($scope){
			$scope.marcopolo = marcopoloService.getResult();
		}
	}
}]);