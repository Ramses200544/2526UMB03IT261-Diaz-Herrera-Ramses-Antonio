angular.module('app').controller('Index', Index);

Index.$inject = ['$scope', '$log'];

function Index($scope, $log) {

    $scope.optionsProveedores = [
        {
            etiqueta: 'UECAC',
            valor: 1
        },
        {
            etiqueta: 'DHL',
            valor: 2
        },
        {
            etiqueta: 'ESTAFETA',
            valor: 3
        },
        {
            etiqueta: 'FedEx',
            valor: 4
        }
    ];

    $scope.optionsAutos = [
        {
            etiqueta: 'Chevy',
            valor: 1
        },
        {
            etiqueta: 'Tornado',
            valor: 2
        },
        {
            etiqueta: 'Camaro',
            valor: 3
        },
        {
            etiqueta: 'Suburban',
            valor: 4
        }
    ];

    $scope.optionsDrivers = [
        {
            etiqueta: 'Puchi',
            valor: 1
        },
        {
            etiqueta: 'Omar',
            valor: 2
        },
        {
            etiqueta: 'Iris',
            valor: 3
        },
        {
            etiqueta: 'Ariadna',
            valor: 4
        }
    ];

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

    //Función que controla el evento de cambio del input Fecha Inicio
    $scope.ctrlInpFechaInicio = () => {
        console.log("Cambiaste una fecha");
    }
    //Función que controla el evento de cambio del select proveedor
    $scope.ctrlSlctProveedor = () => {
        if (!$scope.formConsultaRuta.idProveedor) {
            $scope.formConsultaRuta.idAutomovil = '';
            $scope.formConsultaRuta.idDriver = '';
            $scope.formConsultaRuta.idRuta = '';
        }
        console.log("Seleccionaste otro proveedor");
    }
    //Función que controla el evento de cambio del select automovil
    $scope.ctrlSlctAutomovil = () => {
        if (!$scope.formConsultaRuta.idAutomovil) {
            $scope.formConsultaRuta.idDriver = '';
            $scope.formConsultaRuta.idRuta = '';
        }
        console.log("Seleccionaste otro automovil");
    }
    //Función que controla el evento de cambio del select driver
     $scope.ctrlSlctDriver = () => {
        if (!$scope.formConsultaRuta.idDriver) {
            $scope.formConsultaRuta.idRuta = '';
        }
        console.log("Seleccionaste otro Driver");
    }
  


}