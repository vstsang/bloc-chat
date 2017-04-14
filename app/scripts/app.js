(function() {
	
	// Temp placeholder for the BlocChatCookies service
	// before refactor
	
	function BlocChatCookies($cookies, $uibModal) {
		
		var currentUser = $cookies.get('blocChatCurrentUser');
		
		console.log("Cookie current user is " + currentUser);
		
		if (!currentUser || currentUser === '') {

			var modalInstance = $uibModal.open({
				backdrop: 'static',
				size: 'sm',
				templateUrl: '/templates/setUsernameModalContent.html',
				controller: 'UsernameModalInstanceCtrl',
				controllerAs: '$userctrl'
			});
			
			modalInstance.result.then(function(data) {
				$cookies.put('blocChatCurrentUser', data);
				console.log("Checking cookie: " + $cookies.get('blocChatCurrentUser'));
			}, function() {
				console.log('something went wrong...');
			});
		
		}
	}
	
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
				templateUrl: '/templates/chatroom.html'
		});
	}
	
	angular
		.module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
		.run(['$cookies', '$uibModal', BlocChatCookies])
		.config(config);
})();