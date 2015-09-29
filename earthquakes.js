'use strict';

app.factory('earthquakes', ['$http', function($http){
	var service = {};

	service.get = function(){
		return $http.get('http://apis.is/earthquake/is');
	}

	return service;
}]);
