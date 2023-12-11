// modules/articles/controller.js

const articleService = require('./services');

const getArticles = async (req, res, next) => {
  try {
    const articles = await articleService.getAllArticles();
    res.status(200).json({ success: true, data: articles });
  } catch (error) {
    next(error);
  }
};

const getArticleById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const article = await articleService.getArticleById(id);
    if (!article) {
      return res.status(404).json({ success: false, message: 'Article not found' });
    }
    res.status(200).json({ success: true, data: article });
  } catch (error) {
    next(error);
  }
};

const createArticle = async (req, res, next) => {
  const { title, description, WriterID } = req.body;
  try {
    const newArticle = await articleService.createArticle(title, description, WriterID);
    res.status(201).json({ success: true, data: newArticle });
  } catch (error) {
    next(error);
  }
};
const updateArticle = async (req, res, next) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const updatedArticle = await articleService.updateArticle(id, title, description);
    if (!updatedArticle) {
      return res.status(404).json({ success: false, message: 'Article not found' });
    }
    res.status(200).json({ success: true, data: updatedArticle });
  } catch (error) {
    next(error);
  }
};

const deleteArticle = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedCount = await articleService.deleteArticle(id);
    if (deletedCount === 0) {
      return res.status(404).json({ success: false, message: 'Article not found' });
    }
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
};
