(function () {
    'use strict';

    angular
        .module('app.proveedore')
        .controller('ProveedoreController', ProveedoreController);

    ProveedoreController.$inject = ['logger',
        '$stateParams',
        '$location',
        'Proveedore',
        'TableSettings',
        'ProveedoreForm'];
    /* @ngInject */
    function ProveedoreController(logger,
        $stateParams,
        $location,
        Proveedore,
        TableSettings,
        ProveedoreForm) {

        var vm = this;

        vm.tableParams = TableSettings.getParams(Proveedore);
        vm.proveedore = {};

        vm.setFormFields = function(disabled) {
            vm.formFields = ProveedoreForm.getFormFields(disabled);
        };

        vm.create = function() {
            // Create new Proveedore object
            var proveedore = new Proveedore(vm.proveedore);

            // Redirect after save
            proveedore.$save(function(response) {
                logger.success('Proveedore created');
                $location.path('proveedores/' + response.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Remove existing Proveedore
        vm.remove = function(proveedore) {

            if (proveedore) {
                proveedore = Proveedore.get({proveedoreId:proveedore.id}, function() {
                    proveedore.$remove(function() {
                        logger.success('Proveedore deleted');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.proveedore.$remove(function() {
                    logger.success('Proveedore deleted');
                    $location.path('/proveedores');
                });
            }

        };

        // Update existing Proveedore
        vm.update = function() {
            var proveedore = vm.proveedore;

            proveedore.$update(function() {
                logger.success('Proveedore updated');
                $location.path('proveedores/' + proveedore.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.toViewProveedore = function() {
            vm.proveedore = Proveedore.get({proveedoreId: $stateParams.proveedoreId});
            vm.setFormFields(true);
        };

        vm.toEditProveedore = function() {
            vm.proveedore = Proveedore.get({proveedoreId: $stateParams.proveedoreId});
            vm.setFormFields(false);
        };

        activate();

        function activate() {
            //logger.info('Activated Proveedore View');
        }
    }

})();
