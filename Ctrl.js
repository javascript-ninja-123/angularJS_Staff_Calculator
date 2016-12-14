app.controller('oneController', function($scope,$timeout) {
	var main = this;
	$scope.mealPrice="";
	$scope.taxRate= "";
	$scope.tip= "";
	$scope.getTotal = getTotal;
	$scope.submit = submit;
	$scope.cancel = cancel;
	$scope.reset = reset;
    $scope.count=0;
    $scope.addedTip = 0;
    $scope.averageTip=0 ;


    //get total
	function getTotal(){
		if($scope.myForm.$invalid){
			$scope.mealTotal = null;
			$scope.tipTotal = null;
			$scope.total = null;
			$scope.mealSubTotal = "";
			$scope.tipTotal = "";
			$scope.total = "";
		
		}
		if($scope.myForm.$valid){
$scope.mealSubTotal = ($scope.mealPrice * ($scope.taxRate * 0.01) ) + $scope.mealPrice;
		$scope.tipTotal = ($scope.tip/100) * $scope.mealSubTotal;
		$scope.total = $scope.mealSubTotal + $scope.tipTotal;
		$scope.count++;
		$scope.addedTip += $scope.tipTotal;
		$scope.averageTip = $scope.addedTip/ $scope.count;
		}
		
		
	}

	//valid form check
	function  submit(){
		if($scope.myForm.$invalid){
console.log("invalid");
		}

		else if($scope.myForm.$valid){
			console.log("valid form");
		}
	}

	//cancel
	function cancel(){
		$scope.mealPrice = null;
		$scope.taxRate = null;
		$scope.tip = null;
		$scope.mealSubTotal = null;
		$scope.tipTotal = null;
		$scope.total = null;
		$scope.count = null;
		$scope.addedTip= null;
		console.log("canceled");
	}

	//reset
	function reset(){
		$scope.mealPrice = null;
		$scope.taxRate = null;
		$scope.tip = null;
		$scope.mealSubTotal = null;
		$scope.tipTotal = null;
		$scope.total = null;
		$scope.count = null;
		$scope.addedTip= null;
		$scope.averageTip= null;
		console.log("reset");
	}




});

