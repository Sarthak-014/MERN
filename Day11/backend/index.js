const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json());
app.use(cors())
const mongoose = require('mongoose');
const Moviemodel = require('./Moviemodel');
const port = 3000
app.post('/addmoviedata', 
    async (req, res) => {
    try{
        const newdata = 
        new Moviemodel(req.body);
        await newdata.save();
        console.log(req.body)
        res.send("data saved successfully")
    }
    catch(err){
        console.log("data not saved")
    }
  })

  app.get('/getmoviedata', async (req, res) => {
    try{
        const newdata =  await Moviemodel.find({});
        res.json(newdata);
        console.log(newdata);
    }
    catch(err){
       console.log("data not received");
    }
  })

mongoose.connect("mongodb+srv://wwwsar3838:7Lf8l3sG3W7OeaIf@avcoe.c0lla.mongodb.net/").then(()=>
console.log("Mongodb Database Connected Succesfully"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})