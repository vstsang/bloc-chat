(function() {
/**
* @function Message
* @desc getByRoomId - Return messages based on the roomId parameter
		activeRoomId - Return the selcted room by user mouse click
		send - Add new message to firebase database
* @param {Object} $firebaseArray & BlocChatCookies service 
*/	
	function Message($firebaseArray, BlocChatCookies) {
		var ref = firebase.database().ref().child("messages");
		var messages = $firebaseArray(ref);
		
		var activeRoomId = null;
		
		return {
			all: messages,
		
			getByRoomId: function(roomId) {
				messages = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
				return messages;
			},
			
			activeRoomId: function(roomId) {
				activeRoomId = roomId;
			},
			
			send: function(newMessage) {
				messages.$add({ content: newMessage,
							 	roomId: activeRoomId,
							 	sentAt: Date.now(),
								username: BlocChatCookies.currentUser,
							  });
				
				/*
				console.log("content: " + newMessage);
				console.log("roomId: " + activeRoomId);
				console.log("sentAt: " + Date.now());
				console.log("username: " + BlocChatCookies.currentUser);
				*/
			}
		};
	}
	
	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', 'BlocChatCookies', Message]);
})();