/**
 * Created by Rodrigo Bastos on 20/10/15.
 */

app.directive('load', function ($http)
{
  return {
    restrict: 'A',
    template: function (element, attrs){

      var color =  attrs.template ? colors[attrs.template] : colors[defaultValues.color];
      var position = attrs.templatePosition? positions[attrs.templatePosition] : positions[defaultValues.position];
      var size = attrs.templateSize ? sizes[attrs.templateSize] : sizes[defaultValues.size];
      var label = attrs.templateLabel ? attrs.templateLabel : defaultValues.label;


      return '<div ng-if="isShow" style="left: 0;top: 0;margin: 0;font-family: arial, sans-serif;font-weight: bold;visibility: hidden;z-index: 1050;position: absolute;'+position+';width: 100%;height: 100%;">' +
        '<div style="position: relative;display: inline-block;visibility: visible;font-size: 80%;' + size + color + 'box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);">' +
        ''+label+'</div></div>';
    },
    link: function (scope, element, attrs)
    {

      console.log('attrs', attrs.view);
      scope.$watch(function() {
        return $http.pendingRequests.length > 0;
      }, function(hasPending) {
        scope.isShow = !!hasPending;
      });

    }
  };

});
