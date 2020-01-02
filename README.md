# nodetest2
practice

actually this is more like a dev log hahhhaha

##20200101 

omg it's a new decade and i haven't done shit yet
i have the skeleton of the bot. i can store some input into db and display it.
now i need to change the input into the format i actually need: the hashtags, and then append time to it, 
then store it in the db, then make the webpage read it and display it.

The title page should be "Use me senpai ^^"
and there is a little box that says "topics to follow:" to get input
and a display on the right that lists "currently following"

{ "topic" : "testuser1"}


9:38 pm
oh i need a delete topic button for each of the topics...

##20200102

adding the delete topics button...

10:56am done adding the delete topics buttons

need to somehow connect to twitter and sends request to twitter...

so the global.js sends data to router, router will then send data to db, then global js do a thing that reads from the db again. and the change is reflected.

i want the "do a like" button to sends a signal to db, then retweet will get the list of hashtags from the db, and perform the rest of the actions. 

first add the twitter page first 
11:22am used twitter publish to add a live twitter like page