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

    $scope.optionEjemplo = {
        etiqueta:'Chevy',
        valor: 69
    }

    $scope.optionAutos = [{
        etiqueta:'Chevy',
        valor: 1
    }, 
    {
        etiqueta:'Aveo',
        valor: 2
    },
    {
        etiqueta:'Camaro',
        valor: 3
    },
    {
        etiqueta:'Suburban',
        valor: 4
    }];

    $scope.optionProveedor = [
        {etiqueta: 'Bimbo', valor: 44}, {etiqueta: 'Marinela', valor: 45 }
    ]

    $scope.optionDriver = [
        {etiqueta: 'Oscar', valor: 20}, {etiqueta: 'Alex', valor: 18 }
    ]

}

