/* JavaScript Document */

//Enclosure of an annonymous function

(function(){
//Declaring the variable app to be the name "myCalculator"
    var app = angular.module('myCalculator',[]);
//app.controller has two parameters: 1) String, which is the name of our Main Calculator Controller that we will be assigning to the "main" container (main element) in our HTML
//app.controller's second parameter is 2) An array: which has two elements: i) The services that we will be using (i.e. scope service) and ii) an element that's a function, which uses the services that we injected into the array's first element
    app.controller('CalculatorController', ['$scope',function($scope){
        
        $scope.lumen_options = [375, 600, 900, 1125, 1600];
//The purpose of current_lumens is to state the default value when user loads the page. Ensure that the starting value of 600 matches one of the values in the array.
        $scope.current_lumens = 600;
        $scope.current_cost = 12;
        $scope.current_hours = 3;
        $scope.total_days = 365;
        
        $scope.inc_conversion = .0625;
        $scope.hal_conversion = .0450;
        $scope.cfl_conversion = .0147;
        $scope.led_conversion = .0125;
//The scope.calculate function is not working for some reason
        $scope.calculate = function() {

            $scope.inc_wattage = ($scope.current_lumens * $scope.inc_conversion).toFixed(1);
            $scope.hal_wattage = ($scope.current_lumens * $scope.hal_conversion).toFixed(1);
            $scope.cfl_wattage = ($scope.current_lumens * $scope.cfl_conversion).toFixed(1);
            $scope.led_wattage = ($scope.current_lumens * $scope.led_conversion).toFixed(1);
            
            if( $scope.current_hours > 24 ) { $scope.current_hours = 24; }
            
            var total_hours = $scope.total_days * $scope.current_hours;
            var cost = $scope.current_cost / 100;
            
            $scope.inc_cost = ((($scope.inc_wattage * total_hours) / 1000) * cost).toFixed(2);
            $scope.hal_cost = ((($scope.hal_wattage * total_hours) / 1000) * cost).toFixed(2);
            $scope.cfl_cost = ((($scope.cfl_wattage * total_hours) / 1000) * cost).toFixed(2);
            $scope.led_cost = ((($scope.led_wattage * total_hours) / 1000) * cost).toFixed(2);
            
        }
        
        $scope.calculate();
        
    }]);
    
    
    
    
})();