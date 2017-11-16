angular.module("movieCatalog")
.factory("myCatalog", function($q, $http){
	return {
		showMovies: function() {
			var promise = $q.defer();
			$http.get("http://private-74b50-provaangularjs.apiary-mock.com/movies").then(
				function(apiResult){
					var movies = []
					angular.forEach(apiResult, function(movie){
						movies = apiResult.data
					});
					promise.resolve(movies);
				}
			);
			return promise.promise;
		},
	};
});
