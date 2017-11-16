angular.module('movieCatalog')
.controller('firstCtrl', function($scope, myCatalog) {
  let loadMovies = function(){
    myCatalog.showMovies().then(function(movies) {
      $scope.movies = movies
    })
  }
  $scope.title = "Movie Catalog"

loadMovies();
//
//
});
