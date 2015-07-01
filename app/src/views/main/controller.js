'use strict';

/**
 * @ngdoc object
 * @name fkjs.views.main
 * 
 * @requires $scope
 * @requires $locale
 * @requires $translate
 * @requires $translateProvider
 *
 * @description
 * Refers to the view defined inside index.html, which is usually the main structure of the application.
 */
angular.module('fkjs.views.main', [])


/**
 * @ngdoc controller
 * @name fkjs.views.main#config
 * @methodOf fkjs.views.main
 *
 * @description
 * This config initialize the localization object which is being provided by {@link http://angular-translate.github.io/docs/#/api angular-translate package}.  
 * You can also use {@link https://docs.angularjs.org/guide/i18n#messageformat-extensions message format}.
 */
.config(function($translateProvider){
    // Register a loader for the static files
    $translateProvider.useStaticFilesLoader({
        prefix: 'data/locale/',
        suffix: '.json'
    });
    
    //escape html chars inside messages
    $translateProvider.useSanitizeValueStrategy('escaped');
})


/**
 * @ngdoc directive
 * @name fkjs.views.main:fkjsVerticalScroller
 * 
 * @requires $window
 * @requires $timeout
 * 
 * @param {number} headerHeight Optional. If for some reason you wish to define 
 * a diffrent height than the current height of the application's header.
 * 
 * @description
 * Calculate window height and apply it to page container to make it scrollable when content is long.  
 * Please note that in order for this directive to work, the element must be styled with "overflow-y: auto;"
 * 
 * @usage
 *   // css
 *   .fkjs-page-container{
 *       overflow-y: auto;
 *   }
 * 
 * // html
 * <ANY fkjs-page-scroller header-id="hederId" class="fkjs-page-container" header-height="[optional number]">...</ANY>
 */
.directive('fkjsPageScroller', function($window, $timeout){
    return {
        restrict: 'A',

        scope: {
            headerHeight: '=',
            headerId: '@'
        },

        link: function(scope, element){
            var paddingTop = element.css('padding-top');
            var paddingBottom = element.css('padding-bottom');
            var header = $('#'+ scope.headerId);
            
            scope.onResize = function(){
                // calculate header height
                var headerHeight = scope.headerHeight || header.outerHeight();
                if(isNaN(headerHeight)){
                    return;
                }
                
                // add padding and calculate the window height
                var totalHeight = headerHeight + parseInt(paddingTop) + parseInt(paddingBottom);
                var windowHeight = $window.innerHeight - totalHeight;
                
                // apply height to page container
                $(element).height(windowHeight);
            };
            
            // bind calculation to resize event
            angular.element($window).bind('resize', function(){
                scope.onResize();
            });
            
            // calculate height for the first time when dom is ready.
            $timeout(function(){
                scope.onResize();
            });
        }
    };
})


/**
 * @ngdoc controller
 * @name fkjs.views.main#MainController
 * @methodOf fkjs.views.main
 *
 * @description
 * Controls this view's logic and behavior.  
 * This controller is responsible for managing global aspects of the application, such as localization.
 */
.controller('MainController', function($scope, $locale, $translate){
    // Tell the module which language to use by default (=file name)
    $translate.preferredLanguage($locale.id);
    $translate.use($locale.id);
    
    // global variable that need to be passed down to contained directives by index.html
    $scope.headerId = 'fkjsHeader';
});