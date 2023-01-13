import logging from './logging.js';
import config from './environment.js';
import express from 'express';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';
import createError from 'http-errors';
import queryParser from 'express-query-int';
import bodyParser from 'body-parser';
import db from './database.js';
import wordsRouter from '../api/words.js';
import indexRouter from '../api/index.js';
import catalogRouter from '../api/catalog.js';

const PORT = config.backendPORT || 5000;
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());
server.use(queryParser());
server.use(cookieParser());
server.use('/', indexRouter);
server.use('/word', wordsRouter);
server.use('/catalog', catalogRouter);

// catch 404 and forward error handler
server.use((req, res, next) => {
    next(createError(404));
})

// error handler
server.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = config.environment == "development" ? err : {};

    // respond with the error page
    logging.error(`bad error: ${err}`);
    res.status(err.status || 500).json({ msg: 'Um erro grave aconteceu. Contate o suporte'});
});


server.listen(PORT, () => {
    logging.info(`Backend is running on port ${PORT} at ${server.get('env')}.`);
    logging.info('vv server start vv');
    logging.info(`Server is listening on port ${config.backendPORT} | ${PORT}`);
    logging.info('^^ server start ^^');
})

server.on( 'close', () => console.log('Closing') );

export default server;