(function() {
angular
  .module('loc8rApp')
  .directive('ratingStars', ratingStars);

function ratingStars() {
  return {
    restrict: 'EA',
    scope: {
      thisRating: '=rating'
    },
//    templateURL: 'common/directive/ratingStars/ratingStars.template.html'
    template: '<span class="glyphicon glyphicon-star{{ thisRating<1 ? \'-empty\' : \'\'}}"></span><span class="glyphicon glyphicon-star{{ thisRating<2 ? \'-empty\' : \'\'}}"></span><span class="glyphicon glyphicon-star{{ thisRating<3 ? \'-empty\' : \'\'}}"></span><span class="glyphicon glyphicon-star{{ thisRating<4 ? \'-empty\' : \'\'}}"></span><span class="glyphicon glyphicon-star{{ thisRating<5 ? \'-empty\' : \'\'}}"></span>'
  };
}
})();
