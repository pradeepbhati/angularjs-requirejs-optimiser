define([
    'angular',
    './module',
], function(angular, contactModule) {
    'use strict';

    /**
     * [contactService description]
     * @param  {[type]} $http [description]
     * @return {[type]}       [description]
     */
    contactModule.service('ContactService', ['$http',
        function($http) {

            var self = this;

            /**
             * [getContacts description]
             * @return {[type]} [description]
             */
            self.getContacts = function() {
                return $http.get('data/contacts.json');
            };
        }
    ]);

});