(function () {

  angular
    .module('loc8rApp')
    .directive('pageHeader', pageHeader);

  function pageHeader () {
    return {
      restrict: 'EA',
      scope: {
        content : '=content'
      },
//      templateURL: '/common/directive/pageHeader/pageHeader.template.html'
      template: '<div id="banner" class="page-header"><div class="row"><div class="col-lg-6"></div><h1>{{ content.title }}<small>{{ content.strapline }}</small><h1></div></div>'
    };
  }
})();
