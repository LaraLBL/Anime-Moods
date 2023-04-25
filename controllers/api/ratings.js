const Rating = require('../../models/rating');

module.exports = {
 create,
 getRatings,
 delete:deleteRating,
};

function create(req,res){
 const { animeId, userId, text } = req.body;
 const newRating = new Rating({
  animeId,
  userId,
  text
});
newRating.save((err, comment) => {
 if (err) {
   res.status(500).send(err);
 } else {
   res.status(201).json(comment);
 }
});
};

function getRatings (req, res){
 Rating.find({ animeId: req.params.animeId }, (err, comments) => {
  if (err) {
   res.status(500).send(err);
  } else {
   res.status(200).json(comments);
  }
 });
};

function deleteRating(req,res){
 Rating.findByIdAndDelete({ animeId: req.params.animeId }, (err, comments) => {
  if (err) {
   res.status(500).send(err);
  } else {
   res.status(200).json(comments);
  }
 });
}