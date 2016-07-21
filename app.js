var app = angular.module("reddit", []);

app.controller("posts", function($scope){
$scope.posts = [
  {title: 'Cool Car 1',
  author: 'Ray',
  image: 'http://autoguide.com.vsassets.com/blog/wp-content/uploads/2016/05/2016-audi-a5.jpg',
  description:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
},
  {title: 'Cool Car 2',
  author: 'Ray',
  image: 'http://autoguide.com.vsassets.com/blog/wp-content/uploads/2016/05/2016-audi-a5.jpg',
  description:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }];
});
