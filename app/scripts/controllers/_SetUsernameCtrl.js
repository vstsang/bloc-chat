(function() {
/**
* @function SetUsernameCtrl
* @desc SetUsername modal controller
*/
	function SetUsernameCtrl($uibModal) {
		
		this.open = function() {
			var modalInstance = $uibModal.open({
				animation: true,
				templateUrl: 'setUsernameModalContent.html',
				controller: 'UsernameModalInstanceCtrl',
				controllerAs: '$userctrl'
			});
		}
	}
	
	angular
		.module('blocChat')
		.controller('SetUsernameCtrl', ['$uibModal', SetUsernameCtrl]);
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