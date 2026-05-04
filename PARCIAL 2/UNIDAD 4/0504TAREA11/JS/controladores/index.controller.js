angular.module('app').controller('Index', Index);

Index.$inject = ['$scope', '$log'];

function Index($scope, $log) {

    $scope.formConsultaRuta = {
        fechaInicio: '',
        fechaFin: '',
        idProveedor: '',
        idAutomovil: '',
        idDriver: '',
        idRuta: '',
    }

    $scope.imprimirMensaje = () => {
        console.log($scope.formConsultaRuta);
    }

    $scope.optionProveedor = [
        {etiqueta: 'Compania A', valor: 1}, {etiqueta: 'Compania B', valor: 2 }
    ]


    $scope.optionAutos = [];
    $scope.optionDriver = [];

    $scope.cargarAutomoviles = function () {
        $scope.formConsultaRuta.idAutomovil = '';
        $scope.formConsultaRuta.idDriver = '';
        $scope.optionDriver = [];

    if ($scope.formConsultaRuta.idProveedor == 1) {
        $scope.optionAutos = [
            {valor: 24, etiqueta: 'March'},
            {valor: 25, etiqueta: 'Aveo'}
        ]
    }
     if ($scope.formConsultaRuta.idProveedor== 2) {
        $scope.optionAutos = [
            {valor: 34, etiqueta: 'Sentra'},
            {valor: 35, etiqueta: 'Corolla'}
        ]
    }
    };


     $scope.cargarDrivers = function () {

        $scope.formConsultaRuta.idDriver = ''

        if ($scope.formConsultaRuta.idAutomovil == 24) {
            $scope.optionDriver = [
                { valor: 100, etiqueta: 'Juan'},
                { valor: 101, etiqueta: "Pedro" }
            ]
        }

        if ($scope.formConsultaRuta.idAutomovil == 25) {
            $scope.optionDriver = [
                { valor: 200, etiqueta: 'Luis'},
                { valor: 201, etiqueta: 'Carlos'},
            ]
        }

         if ($scope.formConsultaRuta.idAutomovil == 34){
            $scope.optionDriver = [
                { valor: 300,etiqueta:'Wilson'},
                { valor: 301,etiqueta:'Neitan'}
            ]
        }
        
        if ($scope.formConsultaRuta.idAutomovil == 35) {
            $scope.optionDriver = [
                { valor:400,etiqueta:'Antonio'},
                { valor: 401, etiqueta:'Misael'}
            ]
        }
    };

    }
