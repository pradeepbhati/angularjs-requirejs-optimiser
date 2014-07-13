define([
    'angular'
], function(angular) {
    'use strict';

    var contactModule = angular.module('contact', []);

    contactModule.config(['$stateProvider', '$urlRouterProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$ocLazyLoadProvider',
        function($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $ocLazyLoadProvider) {
            /**
             * override angular default module api for creating components
             * @type {Function|register|register|register}
             */
            contactModule.controller = $controllerProvider.register;
            contactModule.service = $provide.service;
            contactModule.factory = $provide.factory;
            contactModule.filter = $filterProvider.register;
            contactModule.directive = $compileProvider.directive;

        }
    ]);
    return contactModule;
});