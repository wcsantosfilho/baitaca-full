import Word from '../models/word.js';
import logging from '../config/logging.js';


const index = (req, res, next) => {
    res.status(200).json('[wordcontroller] Not implemented: index');
}

const wordList = async (req, res, next) => {
    const findResult = await Word.find({})
        .select({ _id: 1, word: 1})
        .sort({ word: -1})
        .exec((err, findResult) => {
            if (err) {
                return next(err);
            }
            if ( findResult.length > 0) {
                logging.info(`[wordList] status:200`);
                res.status(200).json(findResult);
            } else {
                logging.info(`status:${findResult}`);
                res.status(400).json('Nenhuma palavra encontrada');
            }
        })
}

const wordListByInitialLetter = async (req, res, next) => {
    try {
        const letter = req.params.letter.toLowerCase()
        const findResult = Word
            .find({
                word: new RegExp('^'+letter+'.*$')
            })
            .select({ _id: 1, word: 1})
            .sort({ word: 1})
            .exec((err, findResult) => {
                if (err) {
                    return next(err);
                }
                if ( findResult.length > 0) {
                    logging.info(`[wordListByInitialLetter] status:200 letter:${letter}`);
                    res.status(200).json(findResult);
                } else {
                    logging.info(`status:${findResult}`);
                    res.status(404).json('Nenhuma palavra encontrada');
                }
            })
    } catch (error) {
        return next(error);
    }
}

const wordListByNumberOfLetters = async (req, res, next) => {
    try {
        const number = parseInt(req.params.number)
        const findResult = Word
            .find({
                word: { $exists: true },
                $expr: { $eq: [{ $strLenCP: '$word' }, number] }
            })
            .select({ _id: 1, word: 1})
            .sort({ word: 1})
            .exec((err, findResult) => {
                if (err) {
                    return next(err);
                }
                if ( findResult.length > 0) {
                    logging.info(`[wordListByNumberOfLetters] status:200 number:${number}`);
                    res.status(200).json(findResult);
                } else {
                    logging.info(`status:${findResult}`);
                    res.status(404).json('Nenhuma palavra encontrada');
                }
            })
    } catch (error) {
        return next(error)
    }
}

const wordListByNumberOfLettersAndInitial = async (req, res, next) => {
    try {
        const number = parseInt(req.params.number)
        const letter = req.params.letter.toLowerCase()
        const findResult = Word
            .find({
                $and: [
                    { word: { $exists: true } },
                    { $expr: { $eq: [{ $strLenCP: '$word' }, number] } },
                    { word: new RegExp('^'+letter+'.*$') }
                ]
            })
            .select({ _id: 1, word: 1})
            .sort({ word: 1})
            .exec((err, findResult) => {
                if (err) {
                    return next(err);
                }
                if ( findResult.length > 0) {
                    logging.info(`[wordListByNumberOfLettersAndInitial] status:200 number:${number} letter:${letter}`);
                    res.status(200).json(findResult);
                } else {
                    logging.info(`status: 404`);
                    res.status(404).json({ msg: 'Nenhuma palavra encontrada'});
                }
            })
    } catch (error) {
        return next(error)
    }
}

const wordDetail = (req, res, next) => {
    const findResult = Word.findById(req.params.id)
        .exec((err, findResult) => {
            if (err) {
                logging.error(`[wordDetail] id:${req.params.id}`);
                return next(err);
            } else {
                logging.info(`[wordDetail] status:200 id:${req.params.id}`);
                logging.info(`json:${JSON.stringify(findResult)}`);
                res.status(200).json(findResult);
            }
        });
}

export default { index, wordList, wordListByInitialLetter, wordDetail, wordListByNumberOfLetters, wordListByNumberOfLettersAndInitial }