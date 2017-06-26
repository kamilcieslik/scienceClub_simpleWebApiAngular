var app = angular.module("myApp", [])
app.controller("myController", function(
    $scope) {
    $scope.display = true
    $scope.changeDisplay = function () {
        $scope.display = !$scope.display;
    }
    
    var StudentA = { name: 'Andrzej', ects: 9, isBreak: false, fieldOfStudy: "Elektronika", gradeList: [4, 2, 4.5, 5] };
    var StudentB = { name: 'Tomek', ects: 10, isBreak: false, fieldOfStudy: "Informatyka", gradeList: [3, 3.5, 4, 5.5] };
    var StudentC = { name: 'Maja', ects: 4, isBreak: true, fieldOfStudy: "Energetyka", gradeList: [2, 3.5, 4, 5.5] };
    var StudentD = { name: 'Damian', ects: 15, isBreak: false, fieldOfStudy: "Matematyka stosowana", gradeList: [5, 4, 3.5, 5.5] };
    var StudentE = { name: 'Janusz', ects: 21, isBreak: true, fieldOfStudy: "Analityka gospodarcza", gradeList: [2, 3, 5.5] };

    $scope.Students = [StudentA, StudentB, StudentC, StudentD, StudentE];

})                                                                            