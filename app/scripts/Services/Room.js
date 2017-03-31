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
		
		return {
			all: rooms
		};
	}
	
	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();