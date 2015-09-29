var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("dimension1");

	$stateProvider
		.state('dimension1',{
			url: "/dimension1",
			templateUrl: "dimension1/dimension1.html",
			controller: "dim1ctrl"
		})
		.state('dimension2',{
			url: "/dimension2",
			templateUrl: "dimension2/dimension2.html",
			controller: "dim2ctrl"
		})
		.state('dimension3',{
			url: "/dimension3",
			templateUrl: "dimension3/dimension3.html",
			controller: "dim3ctrl"
		});
})
