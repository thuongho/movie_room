angular.module('movieRoomApp.controllers')
  .controller('MoviesController', 
    function($scope, MoviesService){
      console.log("MoviesController is booting.")
      
      // $scope.movies = MoviesService.movies();

      MoviesService.movies().then(function(movies){
        $scope.movies = movies;
      })

      $scope.addFavorite = function(movie) {
        movie.isFavorite = true;
      };

      $scope.removeFavorite = function(movie) {
        movie.isFavorite = false;
      };
  });