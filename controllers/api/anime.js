const Anime = require('../../models/anime');
const List = require('../../models/list');

module.exports = {
 create,
};

async function create(req, res){
 try { 
  console.log(req.body)
  const anime = await Anime.findOne({image: req.body.image})
  const list = await List.findOne({user: req.user._id})
  if (!list) {
   const newList = await List.create({user: req.user._id})
   if (!anime){
    const newAnime = await Anime.create(req.body)
    newList.anime.push(newAnime._id)
    newList.save()
   } else {
    newList.anime.push(anime._id)
    newList.save()
   }
  } else {
   if (!anime){
    const newAnime = await Anime.create(req.body)
    list.anime.push(newAnime._id)
    list.save()
   } else {
    if (list.anime.includes(anime._id)){
     list.save()
    } else {
     list.anime.push(anime._id)
    list.save()
    }
   }
  }
  res.status(200).json("done")
 } catch(err) {
  console.log(err)
  res.status(400).json(err)
 }
}