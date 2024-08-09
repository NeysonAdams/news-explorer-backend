const { ForbiddenError, NotFoundError, BadRequestError } = require("../utils/errors");
const Articles = require("../models/article");


const getArticles = (req, res, next) => {
  Articles
    .find({ owner: req.user._id})
    .then(articles => res.send(articles))
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

  Articles.findById(req.params.id).select("+owner")
  .orFail(new NotFoundError('Article not found'))
    .then(item=>{
      if(!item.owner.equals(req.user._id))
        throw new ForbiddenError('Forbidden: You do not have permission to delete this item')

      return Articles.findByIdAndDelete(req.params.id)
        .then(()=> res.send({ message: 'Item deleted successfully' }))
    })
    .catch(next);
};

module.exports = { getArticles, saweArticle, deleteArticle };