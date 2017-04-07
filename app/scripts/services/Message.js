(function() {

	function Message($firebaseArray) {
		var ref = firebase.database().ref().child("messages");
		var messages = $firebaseArray(ref);
		var roomId = "-Kh1_iwBgSZjE6uKtT16";
		
		return {
			all: messages,
			
			getByRoomId: function () {
				messages = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
				return messages;
			}()
		};
	}
	
	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message]);
})();