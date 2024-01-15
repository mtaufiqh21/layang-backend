import express from 'express';
import * as ArticleController from '../controllers/ArticleController.js';
import multer from 'multer';

const upload = multer();

const router = express.Router();

router.get('/articles', ArticleController.getArticles);
router.get('/articles/:id', ArticleController.getArticleById);
router.post('/articles', upload.single('file'), ArticleController.saveArticle);
router.patch('/articles/:id', ArticleController.updateArticle);
router.delete('/articles/:id', ArticleController.deleteArticle);
router.post('/latest', ArticleController.getLatestArticles);
router.post('/page', ArticleController.getArticlesByPage);

export default router;
