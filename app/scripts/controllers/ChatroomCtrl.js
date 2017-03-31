(function() {
	function ChatroomCtrl(Room) {
		this.rooms = Room(config.databaseURL);
    };

	angular
		.module('blocChat')
		.controller('ChatroomCtrl', ['Room', ChatroomCtrl]);
})();