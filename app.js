angular.module("app", []);

angular.module("app").directive("contactCard", function(){
  return {
    restrict: "E",
    template: "<h3>{{contact}}<h3>",
    scope:{
      data: "="
    },
    controller: function($scope){
      var list = ["Stpehen", "Bob", "Karthik"];
      $scope.contact = list;
    }
  }
})
