(function() {
/**
* @function BlocChatCookies
* @desc Store username in cookies
* @param {Object} $cookies service
*/
  function BlocChatCookies($cookies, $uibModal) {
	  var currentUser = $cookies.get('blocChatCurrentUser');
	  
	  var putUsername = function(username) {
		  $cookies.put('blocChatCurrentUser', username);
	  };
		
	  if (!currentUser || currentUser === '') {
		
		  $uibModal.open({
			  backdrop: 'static',
			  templateUrl: 'setUsernameModalContent.html',
			  controller: 'UsernameModalInstanceCtrl',
			  controllerAs: '$userctrl'
		  });    
		  
	  }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();