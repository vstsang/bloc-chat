(function() {
	function config($stateProvider, $locationProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
		});
		
		$stateProvider
			.state('chatroom', {
				url: '/',
				controller: 'ChatroomCtrl as chatroom',
				templateUrl: '/template/index.html'
		});
	}
	
	angular
		.module('blocChat', ['ui.router'])
		.config(config);
})();