'use strict';

function TaskCtrl($scope,$http,$routeParams){

    $scope.getall = function () {
        $http.get('api/task').success(function (data) {
            $scope.tasks = data;
        });
    }

    $scope.getsingle = function () {
        $http.get('api/task/' + $routeParams.id).success(function (data) {
            $scope.task = data;
        });
    }

    $scope.add = function task(task) {
        $http.post('api/task/', task).success(function (data) {
            $scope.tasks.unshift(data);
        });
    }

    $scope.edit = function (task) {
        location.href = '#/task/edit/' + task.TaskId;        
    }

    $scope.remove = function (task) {
        $scope.task = task;
        $('#modaldelete').modal('show');
    }

    $scope.cofirmeremove = function (task) {
        $http.delete('api/task/' + task.TaskId, task).success(function (data) {
            var index = $scope.tasks.indexOf(task);
            $scope.tasks.splice(index, 1);
        });
    }

    $scope.done = function (task) {
        task.Complete = true;
        $http.put('api/task/' + task.TaskId, task);
    }

    $scope.save = function (task) {
        $http.put('api/task/' + task.TaskId, task).success(function () {
            location.href = '#/task/list';
        });
    }

    var task = {
        TaskId: 0,
        Title: "",
        Complete: false
    };
}

