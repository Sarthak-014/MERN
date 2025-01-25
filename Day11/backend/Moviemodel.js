const mongoose = require('mongoose')

const Movieschema = new 
mongoose.Schema(
{
    moviename : String,
    hero:String,
    heroine:String,
    year:Number,
    rating:Number,
    genre:String
}    
)
const Moviemodel = mongoose.model
("moviedata",Movieschema);
module.exports = Moviemodel