var secondApp = angular.module("mySecondApp", [])
secondApp.controller("mySecondController", ['$scope', 'orderByFilter', function ($scope, orderBy) {


    $scope.display = false
    $scope.changeDisplay = function () {
        $scope.display = !$scope.display;
    }

    var Teachers = [
     { name: 'Jerzy Pietnaszko', yearsOfExperience: 30, department: "WPPT" },
     { name: 'Janusz Biernak', yearsOfExperience: 20, department: "ZAK" },
     { name: 'Tomasz Al-Kapon', yearsOfExperience: 15, department: "IIAR" },
     { name: 'Zbigniew Nowak', yearsOfExperience: 4, department: "WPPT" },
     { name: 'Al Pacino', yearsOfExperience: 22, department: "ZAK" }
    ];

    $scope.propertyName = 'age';
    $scope.Teachers = orderBy(Teachers, $scope.propertyName);

    $scope.sortBy = function (propertyName) {
        $scope.reverse = (propertyName !== null && $scope.propertyName === propertyName)
        $scope.propertyName = propertyName;
        $scope.Teachers = orderBy(Teachers, $scope.propertyName);
    };

    $scope.addTeacher = function (teacher) {
        $scope.Teachers.push(teacher)
    };

    $scope.filterFunction = function (element) {
        return element.yearsOfExperience > 20 ? true : false;
    };

}])