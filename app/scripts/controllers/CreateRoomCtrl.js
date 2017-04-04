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
			$uibModalInstance.close(this.roomName);
			Room.addRoom(roomName);
		};
		
		this.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		};
  	}
	
	angular
		.module('blocChat')
		.controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', ModalInstanceCtrl]);
})();