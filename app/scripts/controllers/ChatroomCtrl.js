(function() {
/**
* @function ChatroomCtrl
* @desc Chatroom controller
* @param {Object} Room service
*/	
	function ChatroomCtrl(Room, Message) {
		this.rooms = Room.all;
		this.clickedRoom = Message.clickedRoom;
		this.messages = Message.getByRoomId;
    };

	angular
		.module('blocChat')
		.controller('ChatroomCtrl', ['Room', 'Message', ChatroomCtrl]);
})();