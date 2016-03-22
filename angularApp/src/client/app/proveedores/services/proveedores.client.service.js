(function() {
    'use strict';

    angular
        .module('app.proveedore')
        .factory('Proveedore', Proveedore);

    Proveedore.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Proveedore($resource, API_BASE_URL) {

        var params = {
            proveedoreId: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            }
        };

        var API_URL = API_BASE_URL + '/proveedores/:proveedoreId';

        return $resource(API_URL, params, actions);

    }

})();
