// modules/articles/services.js

const queries = require('../../database/queries');

const articleService = {};

articleService.getAllArticles = () => queries.selectLastNRecords('articles', 100);

articleService.getArticleById = (id) => queries.selectById('articles', id);

articleService.createArticle = (title, description, WriterID) => queries.insertRecord('articles', { title, description, WriterID });

articleService.updateArticle = (id, title, description) =>
    queries.updateRecord('articles', { title, description }, { id });

articleService.deleteArticle = (id) => queries.deleteRecord('articles', { id });

module.exports = articleService;
