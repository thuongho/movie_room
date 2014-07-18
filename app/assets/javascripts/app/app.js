angular.module('movieRoomApp', [
  'ngRoute',
  'movieRoomApp.controllers',
  'movieRoomApp.services'
  ])
  .config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/movie/:movie_id',
        {
          controller: 'MovieController',
          templateUrl: '/templates/movie.html'
        })
      .when('/', 
        {
          controller: 'MoviesController',
          templateUrl: '/templates/movies.html'
        })
      .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
  });

  