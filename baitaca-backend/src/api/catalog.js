import express from 'express';
import wordController from '../controllers/wordController.js';

const router = express.Router();

// word routes

// GET word Index
router.get('/', wordController.index);

// GET word List
router.get('/word/list', wordController.wordList);

// GET Word List by Initial Letter
router.get('/word/:letter/initialLetter', wordController.wordListByInitialLetter);

// GET Word List by Number of Letters
router.get('/word/:number/numberOfLetters', wordController.wordListByNumberOfLetters);

// GET Word List by Number of Letters and Initial
router.get('/word/:number/:letter/numberOfLettersAndInitial', wordController.wordListByNumberOfLettersAndInitial);

// GET Word Detailt
router.get('/word/:id/detail', wordController.wordDetail);

export default router;