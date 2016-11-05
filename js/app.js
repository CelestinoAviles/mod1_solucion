(function () {
'use strict';

    
angular.module('appLunch', [])

    .controller('lunchController', lController);
    
    lController.$inject= ['$scope', '$filter'];

    function lController($scope, $filter) {
        
        $scope.menu="";
        $scope.texto="";
        $scope.auxColor = 'black';
    
    $scope.analizar = function() {
        var auxNumero;
        var auxTxt;
        auxNumero = productos();
        console.log(auxNumero);
        if (auxNumero == 0) {
            auxTxt = "You should introduce some aliment";
            $scope.auxColor = 'red';
        } else 
        { if (auxNumero <=3) {
            auxTxt = "Enjoy!";
            $scope.auxColor = 'green';
        }
                else { auxTxt = "Too much!"; 
                      $scope.auxColor = 'orange';
                     }
        }  
        $scope.texto = auxTxt;
        };
        
    function productos() {
        var auxNum;
        var i;
        var auxMenu = [];
        var auxTxt = "";
        auxNum = 0;
        auxMenu = $scope.menu.split(",") ;
        for (i = 0; i < auxMenu.length; i++) {
           if ( auxMenu[i] !== "") {
               auxNum++ }; 
        };
        console.log(auxNum);

        return auxNum;
    };
        
    };

})();
