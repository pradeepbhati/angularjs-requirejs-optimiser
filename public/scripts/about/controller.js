define([
    'angular',
    './module',
    './service'
], function(angular, aboutModule, service) {
    'use strict';

    /**
     * [aboutController description]
     * @param  {[type]} $scope       [description]
     * @param  {[type]} aboutService [description]
     * @return {[type]}              [description]
     */
    aboutModule.controller('AboutController', ["$scope", '$rootScope', 'AboutService',
        function($scope, $rootScope, aboutService) {

            $rootScope.pageTitle = 'about';

            /**
             * [pageLoad description]
             * @return {[type]} [description]
             */
            $scope.pageLoad = function() {
                aboutService.getAwesomeThings().success(function(response) {
                    if (response.success) $scope.awesomeThings = response.data;
                });
            };

            $scope.alerts = [{
                type: 'danger',
                msg: 'Oh snap! Change a few things up and try submitting again.'
            }];

            /**
             * [addAlert description]
             */
            $scope.addAlert = function() {
                $scope.alerts.push({
                    msg: "Another alert!"
                });
            };

            /**
             * [closeAlert description]
             * @param  {[type]} index [description]
             * @return {[type]}       [description]
             */
            $scope.closeAlert = function(index) {
                $scope.alerts.splice(index, 1);
            };

            $scope.pageLoad();
        }
    ]);
});