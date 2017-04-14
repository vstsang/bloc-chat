(function() {
/**
* @function SendMessageCtrl
* @desc Take the message from the submit form and call the Message send 
*		service and add to Firebase database
* @param {Object} Message service
*/
	
	function SendMessageCtrl(Message) {
		
		this.submit = function(newMessage) {
			Message.send(newMessage);
		}
			
	}
	
	angular
		.module('blocChat')
		.controller('SendMessageCtrl', ['Message', SendMessageCtrl]);
})();