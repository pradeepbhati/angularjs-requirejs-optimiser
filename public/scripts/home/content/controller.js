define([
    'angular',
    '../module',
    '../service',
    'common/services/bootstrap',
], function(angular, lazyModule, service, bootstrapService) {
    'use strict';

    /**
     * [homeController description]
     * @param  {[type]} $scope      [description]
     * @param  {[type]} homeService [description]
     * @return {[type]}             [description]
     */
    lazyModule.controller('ContentController', ['$scope', '$modal', '$rootScope', 'HomeService', 'ModalService',
        function($scope, $modal, $rootScope, homeService, modalService) {
            var self = this;

            $rootScope.pageTitle = 'home';

            /**
             * [pageLoad description]
             * @return {[type]} [description]
             */
            self.pageLoad = function() {
                homeService.getData().success(function(response) {
                    $scope.awesomeThings = response.data;
                });
            };

            self.pageLoad();
        }
    ]);
});