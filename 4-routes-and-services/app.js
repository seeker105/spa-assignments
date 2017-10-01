var clickerApp = angular.module('clickerApp', ['ui.router'])

clickerApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/game');

    $stateProvider

        .state('game', {
            url: '/game',
            views: {

                // Main template
                '': { templateUrl: 'partial-home.html'},

                'header@game': { 
                    templateUrl: 'partial-home-header.html',
                    controller: 'headerController'
                },

                'left@game': {
                    templateUrl: 'partial-left.html',
                    controller: 'leftController'
                },

                'center@game': {
                    templateUrl: 'partial-center.html',
                    controller: 'centerController'
                },

                'right@game': {
                    templateUrl: 'partial-right.html',
                    controller: 'rightController'
                }

            } // end of views
        }) // end of game state

})