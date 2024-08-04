const router = require("express").Router();

const { getArticles, saweArticle, deleteArticle } = require("../controllers/articles")

router.get("/", getArticles);
router.post("/",saweArticle);
router.delete("/:id", deleteArticle);

module.exports = router;