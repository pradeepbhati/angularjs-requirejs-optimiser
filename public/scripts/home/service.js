define([
    'angular',
    './module'
], function(angular, homeModule) {
    'use strict';

    /**
     * [homeService description]
     * @param  {[type]} $http [description]
     * @return {[type]}       [description]
     */
    homeModule.service('HomeService', ['$http',
        function($http) {
            var self = this;

            /**
             * [getData description]
             * @return {[type]} [description]
             */
            self.getData = function() {
                return $http.get('data/home.json');
            };
        }
    ]);

});