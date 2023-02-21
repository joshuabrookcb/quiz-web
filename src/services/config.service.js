angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://quizapijb-env.eba-fequj2us.eu-west-2.elasticbeanstalk.com/';

    return service;
}]);