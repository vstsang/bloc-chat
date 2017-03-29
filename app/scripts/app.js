(function() {
    function config($stateProvider, $locationProvider) {
		$locationProvider
        	.html5Mode({
            	enabled: true,
            	requireBase: false
         	});	
		
		$stateProvider
		 	.state('roomlist', {
				url: '/',
				controller: 'roomlistCtrl as roomlist',
			 	templateUrl: '/templates/roomlist.html'
        	})
			.state('chatroom', {
             	url: '/chatroom',
				controller: 'ChatroomCtrl as chatroom',
             	templateUrl: '/templates/chatroom.html'
        	})
    }
 
    angular
        .module('blocChat', ['ui.router'])
        .config(config);
})();