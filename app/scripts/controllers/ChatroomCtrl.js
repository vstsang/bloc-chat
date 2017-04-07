(function() {
/**
* @function ChatroomCtrl
* @desc Chatroom controller
* @param {Object} Room service
*/	
	function ChatroomCtrl(Room, Message) {
		this.rooms = Room.all;
		this.messages = Message.getByRoomId;
		
		var clickedRoom = function(room) {
			return room.name;
		};
    };

	angular
		.module('blocChat')
		.controller('ChatroomCtrl', ['Room', 'Message', ChatroomCtrl]);
})();