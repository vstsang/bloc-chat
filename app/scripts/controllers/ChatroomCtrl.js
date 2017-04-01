(function() {
/**
* @function ChatroomCtrl
* @desc Chatroom controller
* @param {Object} Room service
*/	
	function ChatroomCtrl(Room) {
		this.rooms = Room.all;
    };

	angular
		.module('blocChat')
		.controller('ChatroomCtrl', ['Room', ChatroomCtrl]);
})();