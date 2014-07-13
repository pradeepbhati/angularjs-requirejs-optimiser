define([
    'angular'
], function(angular) {
    'use strict';

    var commonModule = angular.module('common', []);

    commonModule.config([
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',
        function($controllerProvider, $compileProvider, $filterProvider, $provide) {
            /**
             * override angular default module api for creating components
             * @type {Function|register|register|register}
             */
            commonModule.controller = $controllerProvider.register;
            commonModule.service = $provide.service;
            commonModule.factory = $provide.factory;
            commonModule.filter = $filterProvider.register;
            commonModule.directive = $compileProvider.directive;
        }
    ]);

    return commonModule;
});