(function(){
    'use strict';

    /**
     * @author: Marinescu Dan
     */

    angular.module('partycasino', ['ngRoute', 'ngSanitize'])
    .config(function ($routeProvider, $locationProvider) {
  		$routeProvider
  		.when('/', {
  			templateUrl: 'views/home/home-tpl.html',
  			controller: 'homeCtrl', 
        routeParams: {
          tabtitle: null,
          gameCount: null,
          prise: null
        }
  		}).otherwise({redirectTo: '/'});
  	});
}());
