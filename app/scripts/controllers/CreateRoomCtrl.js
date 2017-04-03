(function() {
/**
* @function CreateRoomCtrl
* @desc Create room modal controller
*/
	function CreateRoomCtrl($uibModal) {
		this.open = function() {
			var modalInstance = $uibModal.open({
				animation: true,
				templateUrl: 'createRoomModalContent.html',
				controller: 'ModalInstanceCtrl',
				controllerAs: '$ctrl',
				resolve: {
					
				}
			});
			
			modalInstance.result.then(function() {
			});
		}
	}
	
	angular
		.module('blocChat')
		.controller('CreateRoomCtrl', ['$uibModal', CreateRoomCtrl]);
})();

(function() {
	function ModalInstanceCtrl($uibModalInstance) {
		this.ok = function() {
			
		};
		this.cancel = function() {
			
		};
	}
	
	angular
		.module('blocChat')
		.controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();