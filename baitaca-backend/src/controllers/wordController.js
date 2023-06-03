import Word from '../models/word.js';
import logging from '../config/logging.js';


const index = (req, res, next) => {
    logging.info(`[wordcontroller]/index host: ${req.headers.host} `); 
    logging.info(`[wordcontroller]/index origin: ${req.get('origin')}`); 
    logging.info(`[wordcontroller]/index referer: ${req.headers.referer} `); 
    console.dir(req.headers);
    console.dir(req.originalUrl);
    console.dir(req.baseUrl);
    console.dir(req.path);
    console.dir(req.hostname);
    console.dir(req.ip);
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

const wordListByNumberOfLettersInitialAndOthers = async (req, res, next) => {
    try {
        const number = parseInt(req.params.number)
        const initialLetter = req.params.letter.toLowerCase()
        const otherLetters = req.params.others.toLowerCase()
        let otherExpression = '';
        if (otherLetters) {
            let arrayOfOtherLetters = otherLetters.split('');
            otherExpression = arrayOfOtherLetters.map(letter => '(?=.*'+letter+')').join('');
            console.log(`Number: ${number} | Initial: ${initialLetter} | Others: ${otherLetters} | ${otherExpression}`)
        } else {
            console.log('others must be present')
        }
        
        const findResult = Word
            .find({
                $and: [
                    { word: { $exists: true }}, 
                    { $expr: { $eq: [{ $strLenCP: '$word' }, number] } }, 
                    { word: new RegExp('^'+initialLetter+otherExpression+'.*$')} 
                ]
            })
            .select({ _id: 1, word: 1})
            .sort({ word: 1})
            .exec((err, findResult) => {
                if (err) {
                    return next(err);
                }
                if ( findResult.length > 0) {
                    logging.info(`[wordListByNumberOfLettersInitialAndOthers] status:200 number:${number} letter:${initialLetter} others:${otherLetters}`);
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

export default { index, wordList, wordListByInitialLetter, wordDetail, wordListByNumberOfLetters, wordListByNumberOfLettersAndInitial, wordListByNumberOfLettersInitialAndOthers }