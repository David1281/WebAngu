let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AssignmentSchema = Schema({
    id: Number,
    title: String,
    imdblD: Number,
    spanishTitle: String, 
    imdbPictureURL: String, //Blob 
    year: Number,
    rtID: String, 
    rtAllCriticsRating: Number, 
    rtAllCriticsNumReviews: Number, 
    rtAllCriticsNumFresh: Number, 
    rtAllCriticsNumRotten: Number, 
    rtAllCriticsScore: Number,
    rtTopCriticsRating: Number, 
    rtTopCriticsNumReviews: Number, 
    rtTopCriticsNumFresh: Number, 
    rtTopCriticsNumRotten: Number,
    rtTopCriticsScore: Number,
    rtAudienceRating: Number,
    rtAudienceNumRatings: Number, 
    rtAudienceScore: Number, 
    rtPictureURL: String
});

module.exports = mongoose.model('Movies', AssignmentSchema);