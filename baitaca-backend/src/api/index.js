import express from 'express';
const router = express.Router();

/* GET users listing */
router.get('/', (req, res, next) => {
    res.redirect('/catalog')
});

export default router;