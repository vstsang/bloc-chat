(function() {
/**
* @function CreateRoomCtrl
* @desc Create room modal controller
* @param {Object} $uibModal service
*/
	function CreateRoomCtrl($uibModal) {
		
		this.open = function() {
			var modalInstance = $uibModal.open({
				animation: true,
				templateUrl: 'createRoomModalContent.html',
				controller: 'RoomModalInstanceCtrl',
				controllerAs: '$ctrl'
			});
		}
	}
	
	angular
		.module('blocChat')
		.controller('CreateRoomCtrl', ['$uibModal', CreateRoomCtrl]);
})();

(function() {
/**
* @function RoomModalInstanceCtrl
* @desc Controller for the modal window
* @param {Object} $uibModalInstance & Room service
*/
	function RoomModalInstanceCtrl($uibModalInstance, Room) {				
				
		this.ok = function(roomName) {
			$uibModalInstance.close(roomName);
			Room.addRoom(roomName);
		};
		
		this.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		};
  	}
	
	angular
		.module('blocChat')
		.controller('RoomModalInstanceCtrl', ['$uibModalInstance', 'Room', RoomModalInstanceCtrl]);
})();