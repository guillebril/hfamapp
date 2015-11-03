// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('hostfamapp', ['ionic','ionic.service.core', 'ionicScroller', 'ngIOS9UIWebViewPatch' ]);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('menu', {
      url: "/menu",
      templateUrl: "menu.html",
      controller : "Page1Controller"
    })

  .state('page2', {
      url: "/page2",
      templateUrl: "page2.html",
      controller : "Page2Controller"
    })

  .state('page3', {
      url: "/page3",
      templateUrl: "page3.html",
      controller : "Page3Controller"
    })

  .state('address', {
      url: "address",
      templateUrl: "forms/address.html",
      controller : "Page3Controller"
    })


    .state('preferences', {
      url: "preferences",
      templateUrl: "forms/preferences.html",
      controller : "Page3Controller"
    })

    .state('members', {
      url: "members",
      templateUrl: "forms/members.html",
      controller : "Page3Controller"
    })

      .state('community', {
      url: "community",
      templateUrl: "forms/community.html",
      controller : "Page3Controller"
    })

      .state('interests', {
      url: "interests",
      templateUrl: "forms/interests.html",
      controller : "Page3Controller"
    })

      .state('description', {
      url: "description",
      templateUrl: "forms/description.html",
      controller : "Page3Controller"
    })

        .state('home', {
      url: "home",
      templateUrl: "forms/home.html",
      controller : "Page3Controller"
    })

        .state('photos', {
      url: "photos",
      templateUrl: "forms/photos.html",
      controller : "Page3Controller"
    })

        .state('school', {
      url: "school",
      templateUrl: "forms/school.html",
      controller : "Page3Controller"
    })

   $urlRouterProvider.otherwise("/menu");

});





app.controller('AppController', function($scope) {
  console.log('In App Controller');

  $scope.leftButtons = [{
    type: 'button-icon icon ion-navicon',
    tap: function(e) {
        $scope.sideMenuController.toggleLeft();
    }
  }];
})

app.controller('Page1Controller', function($scope) {
  console.log('Page 1 Controller');
})

app.controller('Page2Controller', function($scope) {
  console.log('Page 2 Controller');
  $scope.leftButtons = [{
    type: 'button-icon icon ion-navicon',
    tap: function(e) {
        $scope.sideMenuController.toggleLeft();
    }
  }];
})

app.controller('Page3Controller', function($scope, $state, $ionicViewService) {
  console.log('Page 3 Controller');
  $scope.leftButtons = [{
    type: 'button-icon icon ion-navicon',
    tap: function(e) {
        $scope.sideMenuController.toggleLeft();
    }
  }]

 /* $scope.goPage = function(state, animation) {
    $ionicViewService.nextAnimation = animation;
    $state.go(state);
  };
  */


});

//=======================PREFERENCES==========================

app.controller ('MainCtrl',function ($scope, $ionicScrollDelegate) {
  $scope.scrollTop = function() {
    $ionicScrollDelegate.scrollTop();
  };
});



//=======================ios routing fix==========================
//check updating Updating agular however if Angular goes to v2 firebase implementation


angular.module('ngIOS9UIWebViewPatch', ['ng']).config(['$provide', function($provide) {
  'use strict';

  $provide.decorator('$browser', ['$delegate', '$window', function($delegate, $window) {

    if (isIOS9UIWebView($window.navigator.userAgent)) {
      return applyIOS9Shim($delegate);
    }

    return $delegate;

    function isIOS9UIWebView(userAgent) {
      return /(iPhone|iPad|iPod).* OS 9_\d/.test(userAgent) && !/Version\/9\./.test(userAgent);
    }

    function applyIOS9Shim(browser) {
      var pendingLocationUrl = null;
      var originalUrlFn= browser.url;

      browser.url = function() {
        if (arguments.length) {
          pendingLocationUrl = arguments[0];
          return originalUrlFn.apply(browser, arguments);
        }

        return pendingLocationUrl || originalUrlFn.apply(browser, arguments);
      };

      window.addEventListener('popstate', clearPendingLocationUrl, false);
      window.addEventListener('hashchange', clearPendingLocationUrl, false);

      function clearPendingLocationUrl() {
        pendingLocationUrl = null;
      }

      return browser;
    }
  }]);
}]);
