define([
    'angular',
    './module',
    './service',
    'common/services/bootstrap',
], function(angular, homeModule, service, modalService) {
    'use strict';

    /**
     * [homeController description]
     * @param  {[type]} $scope      [description]
     * @param  {[type]} homeService [description]
     * @return {[type]}             [description]
     */
    homeModule.controller('HomeController', ['$scope', '$modal', '$rootScope', '$state', 'HomeService', 'ModalService',
        function($scope, $modal, $rootScope, $state, homeService, modalService) {

            $rootScope.pageTitle = 'home';

            /**
             * [modal description]
             * @return {[type]} [description]
             */
            $scope.modal = function() {
                modalService.showStatusModal('Bootstrap', '$modal is a service to quickly create AngularJS-powered modal windows. Creating custom modals is straightforward: create a partial view, its controller and reference them when using the service.');
            };

            /** 
             * [loadAwesomeThings description]
             * @return {[type]} [description]
             */
            $scope.loadAwesomeThings = function() {
                $state.go('app.home.content');
            };
        }
    ]);
});