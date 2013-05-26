'use strict';

angular.module('filters', []).
    filter('underscore', function () {
        return function (text) {
            return (text) ? text.split(' ').join('_') : text;
        };
    });