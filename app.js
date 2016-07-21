var app = angular.module("reddit", []);
// $scope.sortType = "votes";
app.controller("posts", function($scope){
$scope.posts = [
  {title: 'Cool Car',
  author: 'Ray',
  image: 'http://autoguide.com.vsassets.com/blog/wp-content/uploads/2016/05/2016-audi-a5.jpg',
  votes: 5,
  description:  "AUDI"
},
  {title: 'Another Car',
  author: 'Evan',
  image: 'http://media.caranddriver.com/images/16q2/667349/2016-honda-civic-coupe-20l-manual-test-review-car-and-driver-photo-668444-s-429x262.jpg',
  votes: 2,
  description:  "Honda"
  }];
  $scope.upVote = function (post) {
         post.votes++;
     };
     $scope.downVote = function (post) {
            post.votes--;
        };
$scope.started = false;



});
