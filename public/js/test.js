(function(){

		var app=angular.module('try',[]);
		
    app.controller('tryController', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {
            
                $http.get('/questions').then(function (response) {
                    
                    
                    $scope.myWelcome = response.data;
                    console.log($scope.myWelcome)
                
                });

            }]);

})();