(function() {
/**
* @function UsernameModalInstanceCtrl
* @desc Controller for the set username modal window
*/
	function UsernameModalInstanceCtrl($uibModalInstance) {				
		
		this.ok = function(username) {
			$uibModalInstance.close(username);
			//BlocChatCookies.putUsername(username);
		};
		
  	}
	
	angular
		.module('blocChat')
		.controller('UsernameModalInstanceCtrl', ['$uibModalInstance', UsernameModalInstanceCtrl]);
})();