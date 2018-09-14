var mcqModule = angular.module("mcqModule")
    .controller("OtherController", OtherController);

OtherController.$inject = ["$scope"];

function OtherController($scope) {
    $scope.pageChangeHandler = function (num) {
        console.log('going to page ' + num);
    };
}