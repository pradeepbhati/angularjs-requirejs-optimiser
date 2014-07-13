require.config({
    baseUrl: 'scripts/',
    shim: {
        angular: {
            exports: "angular"
        },
        ocLazyLoad: ['angular'],
        'ui-bootstrap': ['angular'],
        'angular-ui-route': ['angular']
    },
    paths: {
        angular: 'vendors/angular/angular',
        'angular-ui-route': 'vendors/angular-ui-router/release/angular-ui-router',
        ocLazyLoad: 'vendors/ocLazyLoad/ocLazyLoad',
        'ui-bootstrap': 'vendors/angular-bootstrap/ui-bootstrap-tpls.min',
    }
});

requirejs(['app'], function() {
    angular.bootstrap(document.getElementById('app'), ['appModule']);
});