(function() {
/**
* @function Message
* @desc Return messages based on the roomId parameter
* @param {Object} $firebaseArray service
*/	
	function Message($firebaseArray) {
		var ref = firebase.database().ref().child("messages");
		var messages = $firebaseArray(ref);
		
		return {
			all: messages,
		
			getByRoomId: function (roomId) {
				messages = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
				return messages;
			}
		};
	}
	
	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message]);
})();