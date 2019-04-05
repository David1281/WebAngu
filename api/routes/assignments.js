let Assignment = require('../model/assignment');

// Get all assignments
function getAssignments(req, res){
    Assignment.find( (err, movies) => {
        if(err){
            res.send(err)
        }

        res.send(movies);
    });
}

// Get an assignment by ID
function getAssignment(req, res){
    let assignmentId = req.params.id;

    Assignment.findOne({id: assignmentId}, (err, movies) =>{
        if(err){res.send(err)}
        res.json(movies);
    })
}

// Post an Assignment
function postAssignment(req, res){
    let assignment = new Assignment();
    assignment.id = req.body.id;
    assignment.title = req.body.title;
    assignment.imdblD = req.body.imdblD;
    assignment.spanishTitle = req.body.spanishTitle;
    assignment.imdbPictureURL = req.body.imdbPictureURL;
    assignment.year = req.body.year;
    assignment.rtID = req.body.rtID;
    assignment.rtAllCriticsRating = req.body.rtAllCriticsRating;
    assignment.rtAllCriticsNumReviews = req.body.rtAllCriticsNumReviews;
    assignment.rtAllCriticsNumFresh = req.body.rtAllCriticsNumFresh;
    assignment.rtAllCriticsNumRotten = req.body.rtAllCriticsNumRotten;
    assignment.rtAllCriticsScore = req.body.rtAllCriticsScore;
    assignment.rtTopCriticsRating = req.body.rtTopCriticsRating;
    assignment.rtTopCriticsNumReviews = req.body.rtTopCriticsNumReviews;
    assignment.rtTopCriticsNumFresh = req.body.rtTopCriticsNumFresh;
    assignment.rtTopCriticsNumRotten = req.body.rtTopCriticsNumRotten;
    assignment.rtTopCriticsScore= req.body.rtTopCriticsScore;
    assignment.rtAllCriticsNumRotten = req.body.rtAllCriticsNumRotten;
    assignment.rtAudienceRating = req.body.rtAudienceRating;
    assignment.rtAudienceNumRatings = req.body.rtAudienceNumRatings;
    assignment.rtAudienceScore = req.body.rtAudienceScore;
    assignment.rtPictureURL = req.body.rtPictureURL;
    assignment.save( (err) => {
        if(err){
            res.send('cant post assignment ', err);
        }
        res.json({ message: `${assignment.title} saved!`})
    })
}

// Update an assignment
function updateAssignment(req, res) {

    Assignment.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, movies) => {
        if (err) {
            res.send(err)
        }
        res.json({message: `updated`})
      // console.log('updated ', assignment)
    });

}

// Delete an assignment
function deleteAssignment(req, res) {

    Assignment.findByIdAndRemove(req.params.id, (err, movies) => {
        if (err) {
            res.send(err);
        }
       res.json({message: `deleted`});
    })
}



module.exports = { getAssignments, postAssignment, getAssignment, updateAssignment, deleteAssignment };
