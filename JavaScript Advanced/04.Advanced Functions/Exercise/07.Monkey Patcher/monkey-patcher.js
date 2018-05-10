function solution(args) {
  switch (args) {
    case 'upvote':
      this.upvotes += 1;
      break;
    case 'downvote':
      this.downvotes += 1;
      break;
    case 'score':
      let currUpvotes = this.upvotes;
      let currDownvotes = this.downvotes;
      let rating = 'new';
      let balance = currUpvotes + currDownvotes;
      let score;
      if (balance >= 10) {
        if (currUpvotes > 0.66 * (balance)) {
          rating = 'hot';
        } else if (currDownvotes > currUpvotes) {
          rating = 'unpopular';
        } else if (currUpvotes > 100 || currDownvotes > 100) {
          rating = 'controversial';
        }
      }
      if (balance > 50) {
        let modifier = Math.ceil(0.25 * Math.max(currUpvotes, currDownvotes));
        currUpvotes += modifier;
        currDownvotes += modifier;
      }
      score = currUpvotes - currDownvotes;
      return [currUpvotes, currDownvotes, score, rating];
  }
}

let post = {
  id: '3',
  author: 'emil',
  content: 'wazaaaaa',
  upvotes: 100,
  downvotes: 100
};

solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score');
console.log(score);
solution.call(post, 'downvote');
solution.call(post, 'downvote');
score = solution.call(post, 'score');
console.log(score);
