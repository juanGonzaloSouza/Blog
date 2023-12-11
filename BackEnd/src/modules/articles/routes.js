// modules/articles/routes.js

const express = require('express');
const articleController = require('./controller');

const router = express.Router();

router.get('/', articleController.getArticles);
router.get('/:id', articleController.getArticleById);
router.post('/', articleController.createArticle);
router.put('/:id', articleController.updateArticle);
router.delete('/:id', articleController.deleteArticle);

module.exports = router;
