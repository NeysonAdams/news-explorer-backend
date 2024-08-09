const router = require("express").Router();

const { getArticles, saweArticle, deleteArticle } = require("../controllers/articles")

const { validateSaweArticle } = require('../middlewares/validation');

router.get("/", getArticles);
router.post("/", validateSaweArticle, saweArticle);
router.delete("/:id", deleteArticle);

module.exports = router;