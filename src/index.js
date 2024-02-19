const express = require("express");
const connect = require("./config/database")
const Comment = require("./models/comment");
const app = express();

const tweetRepository = require("./repository/tweet-repository");

app.listen(3000, async () => {
    console.log("server started");
    await connect();
    console.log("Mongo db connected");
    // const tweet = await Tweet.create({
    //     content: "third tweet",
        
    // });

    // const tweet = await Tweet.find({ userEmail: "a@b.com"});

    const tweetRepo = new tweetRepository();

    const tweet = await tweetRepo.getAll(0, 4);
    console.log(tweet[0].contentWithEmail);

    // const tweet = await tweetRepo.create({content: "tweet with comment Schema"});
    // console.log(tweet);
    // const comment = await Comment.create({content: "comment with comment schema"});
    // tweet.comments.push(comment);
    // await tweet.save();
    // console.log(tweet);
    // console.log(tweet);
    // tweet.comments.push({content: "first comment"});
    // await tweet.save();
    // console.log(tweet);
})