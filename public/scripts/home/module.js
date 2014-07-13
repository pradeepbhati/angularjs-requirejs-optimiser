define([
    'angular',
], function(angular) {
    'use strict';

    var homeModule = angular.module('home', []);

    homeModule.config(['$stateProvider', '$urlRouterProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$ocLazyLoadProvider',
        function($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $ocLazyLoadProvider) {
            /**
             * override angular default module api for creating components
             * @type {Function|register|register|register}
             */
            homeModule.controller = $controllerProvider.register;
            homeModule.service = $provide.service;
            homeModule.factory = $provide.factory;
            homeModule.filter = $filterProvider.register;
            homeModule.directive = $compileProvider.directive;

        }
    ]);
    return homeModule;
});