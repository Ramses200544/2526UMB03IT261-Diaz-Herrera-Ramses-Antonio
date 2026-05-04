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
        $scope.formConsultaRuta.idProveedor = '';
        $scope.formConsultaRuta.idDriver = ''
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
    }

    }



