define([
    'angular'
], function(angular) {
    'use strict';

    var aboutModule = angular.module('about', []);

    aboutModule.config(['$stateProvider', '$urlRouterProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$ocLazyLoadProvider',
        function($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $ocLazyLoadProvider) {
            /**
             * override angular default module api for creating components
             * @type {Function|register|register|register}
             */
            aboutModule.controller = $controllerProvider.register;
            aboutModule.service = $provide.service;
            aboutModule.factory = $provide.factory;
            aboutModule.filter = $filterProvider.register;
            aboutModule.directive = $compileProvider.directive;

        }
    ]);
    return aboutModule;
});