(function(){
var app = angular.module('myModule', ["ngRoute"]);
app.config(function($routeProvider){

  $routeProvider.when("/cat",{
    templateUrl: "views/cat.html"
  });

  $routeProvider.when("/dog", {
    templateUrl: "views/dog.html"
  });

  $routeProvider.when("/winslow",{
    templateUrl: "views/winslow.html"
  });

  $routeProvider.when("/sunshine", {
    templateUrl: "views/sunshine.html"
  });



})
})();
