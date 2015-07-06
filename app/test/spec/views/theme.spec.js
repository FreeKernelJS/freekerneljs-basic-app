'use strict';

describe('[module fkjs.views.theme]', function(){

    // load the controller's module and all its dependencies
    beforeEach(module('fkjs.views.theme'));
    
    var ThemeCtrl;
    
    // Initialize the controller and scope
    beforeEach(inject(function ($controller){
        var $scope = {};
        ThemeCtrl = $controller('ThemeController', {$scope: $scope});
    }));
    
    // run tests
    describe('ThemeController ::', function(){
        it('theme view should have a controller', inject(function(){
            expect(ThemeCtrl).toBeDefined();
        }));
    });
});
