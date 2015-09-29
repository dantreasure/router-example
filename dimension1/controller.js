'use strict';

app.controller('dim1ctrl', ['$scope', 'earthquakes', function($scope, earthquakes){
	$scope.message = 'Welcome to Dimension 1!';

	earthquakes.get().then(function(data){
		$scope.earthquakes = data.data.results;
	})
}]);
