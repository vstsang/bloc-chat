(function() {
/**
* @function ChatroomCtrl
* @desc Chatroom controller
* @param {Object} Room & Message service
*/	
	function ChatroomCtrl(Room, Message) {
		this.rooms = Room.all;
		this.room = null;
		
/**
* @function clickedRoom
* @desc Pass the clicked room from ngClick to the getByRoomId 
*		service that shows the corresponding message for the room
* @param {Object} room
*/
		this.clickedRoom = function(room){
			this.room = room;
			this.messages = Message.getByRoomId(room.$id)
		}
		
		
    };

	angular
		.module('blocChat')
		.controller('ChatroomCtrl', ['Room', 'Message', ChatroomCtrl]);
})();