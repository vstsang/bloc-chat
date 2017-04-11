(function() {
/**
* @function BlocChatCookies
* @desc Store username in cookies
* @param {Object} $cookies service
*/
	function BlocChatCookies($cookies, $uibModal) {
		
		var currentUser = $cookies.get('blocChatCurrentUser');

		var putUsername = function(username) {
			$cookies.put('blocChatCurrentUser', username);
		};

	  	if (!currentUser || currentUser === '') {

			var modalInstance = $uibModal.open({
				backdrop: 'static',
				size: 'sm',
				templateUrl: 'setUsernameModalContent.html',
				controller: 'UsernameModalInstanceCtrl',
				controllerAs: '$userctrl'
			});

	  	}	

		return {
			putUsername: putUsername
		};

	}

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();