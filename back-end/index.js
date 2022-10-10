const express = require('express');
const app = express();
const mongoose = require('mongoose');
const tweetModel = require('./models/Tweets');
const cors = require('cors');
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());


mongoose.connect("mongodb+srv://andres11298:Andres11298@cluster0.tzcxeta.mongodb.net/misiontic2022?retryWrites=true&w=majority");

app.get('/',(req,res)=>{
   res.send({"works":"api works succefully plis navigate to other routes like /tweets"});
});

app.get('/tweets',(req,res)=>{
    tweetModel.find({},(err,result)=>{
        if(err){
            console.log(err);
            res.json(err);
        }else{
            res.json(result.reverse())
        }
    })
});

app.get('/tweets/:id',async (req,res) => {
  let result = await tweetModel.findOne({_id:req.params.id}).exec();
  res.send(result);
});

app.post('/newTweet',async (req,res)=>{
    const tweet = req.body;
    const newTweet = new tweetModel(tweet);
    await newTweet.save();
    res.send(tweet)
});

app.delete('/deleteTweet/:id',async (req,res)=>{
    tweetModel.deleteOne({_id: req.params.id}).then(
        () => {
          res.status(200).json({
            message: 'Deleted!'
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
});

app.put('/updateTweet/:id',async(req,res)=>{
  let data = await {
    id:req.params.id,
    tweet:req.body.tweet
  }
      tweetModel.updateOne({_id: data.id}, {tweet:data.tweet}).then(
        () => {
          res.status(201).json({
            message: 'tweet updated successfully!'
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
});


app.listen(port,()=>{
    console.log(`Server runs perfectly on port ${port} `)
});
