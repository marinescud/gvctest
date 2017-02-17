(function(){
    'use strict';

    /**
     * @author: Marinescu Dan
     */

    angular.module('partycasino').controller('homeCtrl', function($scope, $route, $routeParams){

   		$scope.mainCtrl.tabTitle = $routeParams.tabtitle ? $routeParams.tabtitle : 'Home';
		
		$scope.homeCtrl = {};
   		$scope.homeCtrl.helpers = {};
   		$scope.homeCtrl.helpers.gameCount = $routeParams.gameCount ? $routeParams.gameCount : 200;
		
		$scope.homeCtrl.messages = {};
		$scope.homeCtrl.messages.shapo = 'Join today & double your 1st deposit with a 100% up $100 Welcome Bonus!';
		$scope.homeCtrl.messages.benefits = [];

		$scope.homeCtrl.messages.benefits.push('Over ' + $scope.homeCtrl.helpers.gameCount + ' games');
		$scope.homeCtrl.messages.benefits.push('Huge Jackpots');
		$scope.homeCtrl.messages.benefits.push('Free spins & bonuses');
		$scope.homeCtrl.messages.benefits.push('Exclusive Slots');
		$scope.homeCtrl.messages.benefits.push('Live Casino');
		
		$scope.homeCtrl.messages.steps = {};
		$scope.homeCtrl.messages.steps = [{
			title: 'Sign Up',
			desc: 'Enter a few details to create an account'
		}];
		$scope.homeCtrl.messages.steps[1] = {};
		$scope.homeCtrl.messages.steps[1]['title'] = 'Deposit';
		$scope.homeCtrl.messages.steps[1]['desc'] = 'We\'ll double your first deposit up to $100';
		$scope.homeCtrl.messages.steps[$scope.homeCtrl.messages.steps.length] = {};
		$scope.homeCtrl.messages.steps[$scope.homeCtrl.messages.steps.length - 1].title = 'Play';
		$scope.homeCtrl.messages.steps[$scope.homeCtrl.messages.steps.length - 1].desc = 'Start play with your Welcome Bonus instantly';
		
		$scope.homeCtrl.messages.cta = {};
		$scope.homeCtrl.messages.cta.text = 'Sign up now!';
		$scope.homeCtrl.messages.cta.target = 'http://www.google.com';
		
		$scope.homeCtrl.messages.tnc = {};
		$scope.homeCtrl.messages.tnc.title  = 'Terms and Conditions';
		$scope.homeCtrl.messages.tnc.text   = '<h2>Lorem ipsum dolor sit amet</h2><p>Consectetur adipisicing elit. Temporibus sint soluta quos rem, nulla commodi consequuntur odio quae, libero incidunt modi ea minus, natus quo esse iure nam. Cumque, totam?</p>';
		$scope.homeCtrl.messages.tnc.isOpen = false;

		$scope.homeCtrl.messages.tnc.toggleCollapse = function () {
			$scope.homeCtrl.messages.tnc.isOpen = !$scope.homeCtrl.messages.tnc.isOpen;
		};
		
    });
}());