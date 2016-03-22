//Appointment controller
appointments.controller('Appointment', function($rootScope,$scope, $routeParams, $location, AppointmentFactory){

	id=$routeParams.id;

	$scope.Choose = function(reason){
		$scope.appointment.reason = reason;
	}

	AppointmentFactory.getContractor(id, function(data){
		// console.log("brain's info",data);
		 $scope.contractor_name=data[0].username;
		function inArray(value, array){
		    for(var i=0;i<array.length;i++){
		        if(array[i]==value) {return false;}
		    }
		}

		var contractor_services = [];
		for(user in data){
			for(resume in data[user].resume){
				if (inArray(data[user].resume[resume].service, contractor_services) != false){
					contractor_services.push(data[user].resume[resume].service);
				}
			}
		}
		$scope.contractor_services = contractor_services;
	});

	$scope.addAppointment = function(){
		appointment = $scope.appointment;
		appointment.username = $rootScope.users.username;
		appointment.contractor =$scope.contractor_name;
		//-------------------------------------------//
		AppointmentFactory.addAppointment(appointment, function(data){
			$location.path('/calendar/'+id);
		});
	};
});
