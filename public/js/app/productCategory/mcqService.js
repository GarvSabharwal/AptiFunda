angular.module("mcqModule")
    .factory("mcqService", mcqService);

mcqService.$inject = ["$http"];
console.log("Inside Service");

function mcqService($http) {

    return {

        getAllMcqs: function () {

            return $http.get('/getAllMcqs');

            }


    };    


}