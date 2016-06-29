(function () {

  angular
    .module('loc8rApp')
    .controller('reviewModalCtrl', reviewModalCtrl);

  reviewModalCtrl.$inject = ['$uibModalInstance'];
  function reviewModalCtrl ($uibModalInstance) {
    var vm = this;
    
    vm.modal = {
      cancel : function() {
        $uibModalInstance.dismiss('cancel');
      }
    };
  }
})();
