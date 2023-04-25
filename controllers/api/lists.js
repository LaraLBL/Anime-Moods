const List = require('../../models/list')

module.exports = {
 index,
}

async function index(req, res){
 console.log("Hello")
  try {
   
   console.log(req.user)
    const list = await List.findOne({user: req.user._id}).populate('anime');
    console.log(list)
    // if (!list) {
    //   res.json({ animeList: [] });
    // } else {
    //   res.json({ animeList: list.anime });
    // }
    res.status(200).json(list.anime)
  } catch(err) {
    console.log(err);
    res.status(400).json({ error: 'Server error' });
  }
}