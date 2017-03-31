(function() {
	function ChatroomCtrl(Room) {
		this.rooms = Room();
    };

	angular
		.module('blocChat')
		.controller('ChatroomCtrl', ['Room', ChatroomCtrl]);
})();