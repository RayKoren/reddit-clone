var app = angular.module("reddit", []);

app.controller("posts", function($scope) {
    $scope.sortType = "votes";

    $scope.posts = [{
        title: 'Cool Car',
        author: 'Ray',
        image: 'http://autoguide.com.vsassets.com/blog/wp-content/uploads/2016/05/2016-audi-a5.jpg',
        votes: 5,
        description: "AUDI",
        date: new Date("2016-07-17T16:19:53.155Z")
    }, {
        title: 'Bradz Car',
        author: 'Brads Mom',
        image: 'http://previews.123rf.com/images/EyeMark/EyeMark1412/eyemark141200027/35027658-An-old-rusted-out-scrap-car-that-has-been-abandoned-in-the-woods-Stock-Photo.jpg',
        votes: 34,
        description: "AUDI",
        date: new Date("2015-11-17T16:19:53.155Z")
    }, {
        title: 'Another Car',
        author: 'Evan',
        image: 'http://media.caranddriver.com/images/16q2/667349/2016-honda-civic-coupe-20l-manual-test-review-car-and-driver-photo-668444-s-429x262.jpg',
        votes: 2,
        description: "Honda",
        date: new Date("2016-03-17T16:19:53.155Z"),
        comments: [{
            title: 'Yeah This',
            author: 'Bradford',
            text: "bruh",
            cVotes: 2,
            date: new Date("2016-03-17T16:19:53.155Z")
        },
        {
            title: 'HOW ARE YOU????',
            author: 'Zippy',
            text: "Lit Temple",
            cVotes: 0,
            date: new Date("2016-03-17T16:19:53.155Z")
        }]
    }];
    $scope.upVote = function(post) {
        post.votes++;
    };
    $scope.downVote = function(post) {
        post.votes--;
    };
    $scope.submit = function(formData) {
        $scope.posts.push({
            title: formData.title,
            author: formData.author,
            description: formData.description,
            image: formData.image,
            votes: 0,
            date: new Date
        });
    };
    $scope.submitComment = function(formData, posts) {
      console.log(formData);
        $scope.posts.comment.push({
            title: formData.title,
            author: formData.author,
            text: formData.text
        });
    };


});
