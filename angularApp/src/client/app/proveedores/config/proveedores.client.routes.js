(function() {
    'use strict';

    angular
        .module('app.proveedore')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'listProveedore',
                config: {
                    url: '/proveedores',
                    templateUrl: 'app/proveedores/views/list.html',
                    controller: 'ProveedoreController',
                    controllerAs: 'vm',
                    title: 'List Proveedores',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-folder-open"></i> Proveedores'
                    }
                }
            },
            {
                state: 'createProveedore',
                config: {
                    url: '/proveedores/create',
                    templateUrl: 'app/proveedores/views/create.html',
                    controller: 'ProveedoreController',
                    controllerAs: 'vm',
                    title: 'Create Proveedore'
                }
            },
            {
                state: 'viewProveedore',
                config: {
                    url: '/proveedores/:proveedoreId',
                    templateUrl: 'app/proveedores/views/view.html',
                    controller: 'ProveedoreController',
                    controllerAs: 'vm',
                    title: 'View Proveedore'
                }
            },
            {
                state: 'editProveedore',
                config: {
                    url: '/proveedores/:proveedoreId/edit',
                    templateUrl: 'app/proveedores/views/edit.html',
                    controller: 'ProveedoreController',
                    controllerAs: 'vm',
                    title: 'Edit Proveedore'
                }
            }
        ];
    }
})();
