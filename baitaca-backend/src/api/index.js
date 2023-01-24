import express from 'express';
const router = express.Router();

/* redirect to catalog or say we're ok */
router.get('/', (req, res, next) => {
    // res.status(200).json({ msg: 'Eu presto atenção no que eles dizem mas eles não dizem nada!'});
    res.redirect('/catalog')
});

export default router;