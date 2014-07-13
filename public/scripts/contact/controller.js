define([
    'angular',
    './module',
    './service'
], function(angular, contactModule, service) {
    'use strict';

    /**
     * [contactController description]
     * @param  {[type]} $scope [description]
     * @return {[type]}        [description]
     */
    contactModule.controller('ContactController', ['$scope', '$rootScope', 'ContactService',
        function($scope, $rootScope, contactService) {

            $rootScope.pageTitle = 'contact';

            /**
             * [pageLoad description]
             * @return {[type]} [description]
             */
            $scope.pageLoad = function() {
                contactService.getContacts().success(function(response) {
                    $scope.contacts = response.data;
                });
            };

            $scope.pageLoad();
        }
    ]);
});