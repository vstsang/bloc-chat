(function() {

	function Message($firebaseArray) {
		var ref = firebase.database().ref().child("messages");
		var messages = $firebaseArray(ref);
		var roomId = "-Kh1_lgU3IDT2SV2Pjly";
		
		return {
			all: messages,
			
			clickedRoom: function(roomname) {
				roomId = roomname.$id;
				console.log("RoomId is " + roomId);
			},
			
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