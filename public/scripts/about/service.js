define([
    'angular',
    './module',
], function(angular, aboutModule) {
    'use strict';

    /**
     * [aboutService description]
     * @param  {[type]} $http [description]
     * @return {[type]}       [description]
     */
    aboutModule.service('AboutService', ['$http',
        function($http) {
            var self = this;

            /**
             * [getAwesomeThings description]
             * @return {[type]} [description]
             */
            self.getAwesomeThings = function() {
                return $http.get('data/about.json');
            };
        }
    ]);
});