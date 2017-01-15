var express = require('express');
var router = express.Router();
var graphQLHTTP = require('express-graphql');
var GraphQL = require('graphql');
var types = require('graphql/type');
var axios = require('axios');

var RedditType = new types.GraphQLObjectType({
  name: 'RedditType',
  fields: {
    score: { type: types.GraphQLInt },
    subreddit: { type: types.GraphQLString },
    selftext: { type: types.GraphQLString },
    author: { type: types.GraphQLString },
    thumbnail: { type: types.GraphQLString },
    permalink: { type: types.GraphQLString },
    url: { type: types.GraphQLString },
    title: { type: types.GraphQLString },
    num_comments: { type: types.GraphQLString },
  },
});

var Query = new types.GraphQLObjectType({
  name: 'Query',
  fields: function(){
    return {
      RedditType: {
        type: new types.GraphQLList(RedditType),
        resolve: function() {
          // return results from http request
          return axios.get('https://www.reddit.com/hot/.json?count=20', {
            data: {},
            headers: {
              'Content-Type': 'application/json'
            },
          }).then(function(res) {
            var docs = [];
            res.data.data.children.forEach(function(item) {
              docs.push(item.data);
            });
            return docs;
          });
        }
      }
    };
  },
});

const schema = new GraphQL.GraphQLSchema({
  query: Query,
});

/* GET home page. */
router.use('/graphql', graphQLHTTP({
  schema: schema,
  graphiql: true,
}));

router.get('/*', function(req, res, next) {
  res.render('index', { title: 'Hub' });
});

module.exports = router;