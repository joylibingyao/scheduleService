//Appointment controller
appointments.controller('Review', function($rootScope, $scope, $routeParams, $location, ReviewFactory){

	id=$routeParams.id;

	$scope.addReview = function(){
		review = $scope.review;
		review._id = id;
		//-------------------------------------------//
		ReviewFactory.addReview(review, function(data){
			$location.path('/calendar/'+id);
		});
	};
});
