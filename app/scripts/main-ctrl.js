(function(){
    'use strict';

    /**
     * @author: Marinescu Dan
     */

    angular.module('partycasino').controller('mainCtrl', function($scope, $route, $routeParams){
    	$scope.mainCtrl = {};
    	$scope.mainCtrl.tabTitle = '';
    	$scope.mainCtrl.homeTarget = 'http://www.google.com';
    	
		$scope.mainCtrl.messages = {};
		$scope.mainCtrl.messages.footer = {};
		$scope.mainCtrl.messages.footer.license  = 'ElectraWorks Limited, the provider of this website, is licensed by the Government of Gibraltar and regulated by the Gibraltar Gambling Commissioner under the Gambling Act 2005. ElectraWorks Limited has been granted a fixed-odds licence (RGL No. 051) and casino licence (RGL N0. 50) for the operation of remote gambling.';
		$scope.mainCtrl.messages.footer.address   = '2016 &copy; ElectraWorks Limited Suite 6, Atlantic Suites, Europort Avenue, Gibraltar';
	
    });
}());