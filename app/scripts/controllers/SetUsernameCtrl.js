(function() {
/**
* @function SetUsernameCtrl
* @desc SetUsername modal controller
*/
	function SetUsernameCtrl() {

	}
	
	angular
		.module('blocChat')
		.controller('SetUsernameCtrl', [SetUsernameCtrl]);
})();

(function() {
/**
* @function UsernameModalInstanceCtrl
* @desc Controller for the set username modal window
*/
	function UsernameModalInstanceCtrl($uibModalInstance, BlocChatCookies) {				
		
		this.ok = function(username) {
			$uibModalInstance.close(username);
			BlocChatCookies.putUsername(username);
		};
		
  	}
	
	angular
		.module('blocChat')
		.controller('UsernameModalInstanceCtrl', ['$uibModalInstance', 'BlocChatCookies', UsernameModalInstanceCtrl]);
})();