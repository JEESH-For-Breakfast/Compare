require("dotenv").config();
const { Rettiwt } = require('rettiwt-api');

// Creating a new Rettiwt instance using the API_KEY
const rettiwt = new Rettiwt(process.env.TWITTER_API_KEY);

/**
 * Fetching the list of tweets that:
 * 	- contain the words <word1> and <word2>
 */
rettiwt.tweet.search({
    words: ['Apple']
})
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })

