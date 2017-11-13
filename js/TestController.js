angular.module('example', [])
.directive('ngPath', function(){
    return function(scope, elem){
        elem.on('click', function(e){
            // var link = $(e.currentTarget);
            if(elem.hasClass('selected')){
                elem.removeClass('selected');
            }else{
                elem.addClass('selected');
            }
            e.preventDefault();
        })
    }
})
.controller('TestController', ['$scope', function ($scope) {
        // var defaultZoom = {
        //     x: 0,
        //     y: 0,
        //     width: 800,
        //     height: 600
        // };


        // // Instantiate models which will be passed to <panzoom> and <panzoomwidget>

        // // The panzoom config model can be used to override default configuration values
        // $scope.panzoomConfig = {
        //     zoomLevels: 12,
        //     neutralZoomLevel: 5,
        //     scalePerZoomLevel: 1.5,
        //     // initialZoomToFit: defaultZoom
        // };

        // // The panzoom model should initialle be empty; it is initialized by the <panzoom>
        // // directive. It can be used to read the current state of pan and zoom. Also, it will
        // // contain methods for manipulating this state.
        // $scope.panzoomModel = {};

        $scope.toggle = function(){
            
        }
        
        

        // $scope.zoomToSomeElement = function () {
        //     PanZoomService.getAPI('PanZoom').then(function (api) {
        //         api.zoomToFit(someElementDimensions);
        //     });
        // };


}
]);