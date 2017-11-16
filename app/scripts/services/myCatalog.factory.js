angular.module("movieCatalog")
.factory("myCatalog", function($q, $http){
	return {
		showMovies: function() {
			var promessa = $q.defer();
			$http.get("http://private-74b50-provaangularjs.apiary-mock.com/movies").then(
				function(result){
					var movies = []
					angular.forEach(result, function(movie){
						movies = result.data
					});
					promessa.resolve(movies);
				}
			);
			return promessa.promise;
		},
	};
});
