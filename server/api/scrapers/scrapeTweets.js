require("dotenv").config();
const { Rettiwt } = require('rettiwt-api');

// Creating a new Rettiwt instance using the API_KEY
const rettiwt = new Rettiwt(process.env.TWITTER_API_KEY);

/**
 * Fetching the list of tweets that:
 * 	- contain the words <word1> and <word2>
 */
rettiwt.tweet.search({
    words: ['Apple'],
}, 2)
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })




// // Use incase of auth error above
// const { Auth } = require('rettiwt-auth');

// const newAuth = () => {
//     new Auth().getUserCredential({
//     email: process.env.TWITTER_EMAIL,
//     userName: process.env.TWITTER_USERNAME,
//     password: process.env.TWITTER_PASSWORD,
// }).then(cred => {
//     console.log(cred)
// })
// }

// newAuth()