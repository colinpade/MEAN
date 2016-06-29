(function() {
angular
  .module('loc8rApp')
  .service('loc8rData', loc8rData);

loc8rData.$inject = ['$http'];
function loc8rData ($http) {
  var locationByCoords = function (lat, lng) {
    return $http.get('/api/locations?lng='+lng+'&lat='+lat+'&maxDistance=20000000');
  };

  var locationById = function(locationid) {
    return $http.get('/api/locations/'+locationid);
  };

  return {
    locationByCoords : locationByCoords,
    locationById : locationById
  };
}
})();
