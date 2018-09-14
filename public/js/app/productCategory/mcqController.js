var mcqModule = angular.module("mcqModule")
    .controller("McqController", McqController);

McqController.$inject = ["$scope", "$timeout", "mcqService", "$log"];

function McqController($scope, $timeout, mcqService, $log) {

    $scope.questions = [];
    $scope.currentPage = 1;
    
    $scope.totalStudents = "";
    $scope.pageSize = 5;  
    $scope.pageCount = "";
    $scope.currentPage = 1,
    $scope.students = [];
    $scope.studentsArrays = [];
    $scope.studentsList = [];

    getAllMcqs();

    function getAllMcqs() {

        mcqService.getAllMcqs().success(function (data) {
            console.log("aaa")
            if (data) {

                console.log(data);
                $scope.students = data;
                while ($scope.students.length > 0) {
                    $scope.studentsArrays.push($scope.students.splice(0, pageSize));
                }
                $scope.studentsList = $scope.studentsArrays[+$scope.currentPage - 1];
            }

        })

    }




}
