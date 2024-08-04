const { ForbiddenError } = require("../utils/errors");
const Articles = require("../models/article");

const getArticles = (req, res, next) => {
  Articles.find()
  .then(items => res.send(items))
  .catch(next);
}

const saweArticle = (req, res, next) =>
{
  const { keyword, title, text, date, source, link, image } = req.body;
  const owner = req.user._id;
  Articles.create({ keyword, title, text, date, source, link, image, owner })
  .then(item => res.status(201).send(item))
  .catch(next);
}

const deleteArticle = (req, res, next) => {

  Articles.findById(req.params.id)
  .orFail()
    .then(item=>{
      if(!item.owner.equals(req.user._id))
        throw new ForbiddenError('Forbidden: You do not have permission to delete this item')

      return ClothingItem.findByIdAndDelete(req.params.id)
        .then(()=> res.send({ message: 'Item deleted successfully' }))
    })
    .catch(next);
};

module.exports = { getArticles, saweArticle, deleteArticle };