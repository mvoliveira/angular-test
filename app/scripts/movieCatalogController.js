angular.module('movieCatalog')
.controller('movieCatalogController', function($scope, myCatalog) {
  let loadMovies = function(){
    myCatalog.showMovies().then(function(movies) {
      $scope.movies = movies
    })
  }

  loadMovies();
  //
  //
});
