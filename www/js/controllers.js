angular.module('starter.controllers', [])
    .controller('LoginCtrl', function($scope, $state){

        $scope.contacts = [
            { name: 'Gordon Freeman' },
            { name: 'Barney Calhoun' },
            { name: 'Lamarr the Headcrab' },
        ];

        $scope.createContact = function(user) {
            $scope.contacts.push({ name: user.firstName + ' ' + user.lastName });
            console.log('Sign-In', user);
            $state.go('tabs.dash');
        };

        $scope.gotoRegister = function(){
            $state.go('register');
        };
    })

    .controller('RegisterCtrl', function($scope, $state){
        $scope.gotoRegisterDetail = function(){
            $state.go('register-detail');
        };
    })

    .controller('RegisterDetailCtrl', function($state,$scope){
        $scope.gotoMain = function(){
            $state.go('tab.dash');
        };
    })

    .controller('DashCtrl', function($scope) {})

    .controller('ChatsCtrl', function($scope, Chats) {
      // With the new view caching in Ionic, Controllers are only called
      // when they are recreated or on app start, instead of every page change.
      // To listen for when this page is active (for example, to refresh data),
      // listen for the $ionicView.enter event:
      //
      //$scope.$on('$ionicView.enter', function(e) {
      //});

      $scope.chats = Chats.all();
      $scope.remove = function(chat) {
        Chats.remove(chat);
      };
    })

    .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
      $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('AccountCtrl', function($scope) {
      $scope.settings = {
        enableFriends: true
      };
    });
