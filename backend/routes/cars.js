

const express = require('express');
const router = express.Router();
const { CarsController, register, login, getAllPosts, createPost, createComment } = require('./controllers');


router.get('/', CarsController.index);


router.post('/', CarsController.create);


router.get('/:id', CarsController.show);


router.put('/:id', CarsController.update);


router.delete('/:id', CarsController.delete);


router.post('/register', register);


router.post('/login', login);


router.get('/posts', getAllPosts);


router.post('/posts', createPost);


router.post('/comments', createComment);

module.exports = router;
