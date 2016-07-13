(function() {
angular
  .module('loc8rApp')
  .service('loc8rData', loc8rData);

loc8rData.$inject = ['$http', 'authentication'];
function loc8rData ($http, authentication) {
  var locationByCoords = function (lat, lng) {
//###TODO### get this working with inputs for all browsers    return $http.get('/api/locations?lng='+lng+'&lat='+lat+'&maxDistance=20000000');
    return $http.get('/api/locations?lng=-122.4532946&lat=37.7816621&maxDistance=20000000');
  };

  var locationById = function(locationid) {
    return $http.get('/api/locations/'+locationid);
  };

  var addReviewById = function(locationid, data) {
    return $http.post('/api/locations/' + locationid + '/reviews', data, {
      headers: {
        Authorization: 'Bearer '+authentication.getToken()
      }
    });
  };

  return {
    locationByCoords : locationByCoords,
    locationById : locationById,
    addReviewById : addReviewById
  };
}
})();
