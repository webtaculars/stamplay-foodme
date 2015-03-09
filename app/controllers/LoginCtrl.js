/*
This is the controller in charge to make the API call to the login endpoint for email+passowrd authentication.
*/
app.controller('LoginCtrl', ['$scope', '$state', 'userStatus', 'globalVariable',
	function LoginController($scope, $state, userStatus, globalVariable) {

		//setting regexp for email field
		$scope.EMAIL = globalVariable.email;

		//login function   
		$scope.login = function () {
			var user = {
				email: $scope.email,
				password: $scope.password
			}
			userStatus.loginUser(user)
				.success(function (data, status) {
					$state.go('home');
				})
				.error(function (data, status) {
					$scope.error = data;
				})
		}
}])