(function() {
/**
* @function Room
* @desc Factory service to display room in database
* @return {Array} List of rooms
*/	
	function Room($firebaseArray) {
// Create a reference to the Firebase database inside
// and inject the  $firebaseArray service
		var ref = firebase.database().ref().child("rooms");	
		var rooms = $firebaseArray(ref);

/**
* @function addRoom
* @desc Add room to firebaseArray
*/	
		var addRoom = function(roomName) {
			rooms.$add({ name: roomName});
		};
		
		return {
			all: rooms,
			addRoom: addRoom
		};
	}
	
	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();