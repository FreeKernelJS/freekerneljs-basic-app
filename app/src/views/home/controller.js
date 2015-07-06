'use strict';

/**
 * @ngdoc object
 * @name fkjs.views.home
 * 
 * @requires $scope
 * @requires httpService
 *
 * @description
 * A view for the home page of this application.
 */
angular.module('fkjs.views.home', [])


/**
 * @ngdoc controller
 * @name fkjs.views.home#HomeController
 * @methodOf fkjs.views.home
 *
 * @description
 * Controls this view's logic and behavior.
 * This page demonstrates the use of the {@link fkjs.services.http httpService} - to get data using an Ajax request.
 */
.controller('HomeController', function($scope, httpService){
    // define a message parameter
    $scope.lastVisitDate = (new Date()).toLocaleDateString();
    
    //load data with a get request
    httpService.get('data/server/getList.php').then(function(data){ 
        $scope.list = data;
    });
});