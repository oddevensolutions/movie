define([], function () {

    var app = angular.module('movieApp', ['ui.router', 'angularjs-dropdown-multiselect', 'ngDialog', 'ui.bootstrap', 'ngSanitize']);

    app.config(['$stateProvider', '$urlRouterProvider', 'ngDialogProvider', function ($stateProvider, $urlRouterProvider, ngDialogProvider) {

        ngDialogProvider.setDefaults({
            className: 'ngdialog-theme-default',
            plain: false,
            showClose: true,
            closeByDocument: true,
            closeByEscape: true,
            appendTo: false,
            preCloseCallback: function () {
                console.log('default pre-close callback');
            }
        });

        $urlRouterProvider.otherwise('/movies');

        $stateProvider.state('movies', {
            url: '/movies',
            templateUrl: 'app/movies/views/movieView.html',
            controller: 'movieController'
        }).state('addMovie', {
            url: '/movie/addMovie',
            templateUrl: 'app/movies/views/manageMovie.html',
            controller: 'managemovieController'
        }).state('editmovie', {
            url: '/movie/:id/editMovie',
            templateUrl: 'app/movies/views/manageMovie.html',
            controller: 'managemovieController'
        });
    }]);

    return app;
});