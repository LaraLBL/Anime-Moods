const Lists = require('../../models/list')

module.exports = {
 index,
 create,
 addAnime,
 removeAnime,
 delete: deleteList,
 show
}

async function addAnime(req, res){
 const list = await Lists.getAnime(req.user._id)
}