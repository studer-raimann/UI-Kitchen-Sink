module.directive('mainMenuCategories', function () {
    return {
        restrict: 'AEC',
        scope: {
            title : '@',
            isActive:'@'
        },
        transclude: true,
        templateUrl: 'app/src/header/headerMainMenu/mainMenuCategories.tpl.html',
        replace: true,

        link: function(scope, element){
            scope.$watch("isActive",function(newValue,oldValue) {
                scope.brandClass = "";
                if(scope.title=='Information'){
                    scope.brandClass="navbar-brand";
                }
                if(scope.isActive == "true"){
                    scope.active = "active";
                }else{
                    scope.active = "";
                }
            });
        }
    };
});