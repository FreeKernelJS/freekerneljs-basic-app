'use strict';

angular.module('fkjs.widgets.header', [])


/**
 * @ngdoc directive
 * @name fkjs.widgets.header:fkjsHeader
 *
 * @param {string} headerId The id to be bind to the header
 *
 * @description
 * Displays a header on top of each page.
 * 
 * @usage
 * <fkjs-header></fkjs-header>
 */
.directive('fkjsHeader', function(){
    return {
        restrict: 'E',
        templateUrl: 'src/widgets/header/template.html',
        replace: true,
        
        scope: {
            headerId: '@'
        },
        
        controller: function($scope){
            $scope.$on('navbarStateChange', function(event, stateText){
                $scope.pageTitle = stateText;
            });
        }
    };
});