(function() {
  angular
    .module('loc8rApp')
    .directive('fooey', fooey);

  function fooey () {
    return {
      restrict: 'EA',
      templateUrl: '/common/directive/fooey/fooey.template.html'
    };
  }
})();
