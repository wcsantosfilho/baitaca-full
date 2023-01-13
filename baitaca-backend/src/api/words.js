import express from 'express';
const router = express.Router();

/* GET words listing */
router.get('/', (req, res, next) => {
    res.status(200).json('words.js - respond with a resource');
});

export default router;