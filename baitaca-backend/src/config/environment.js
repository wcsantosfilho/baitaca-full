import dotenv from 'dotenv'
import logging from './logging.js'

// mongoimport --type=csv --headerline --mode=upsert --drop --file=palavrasEmPortugues.csv --collection=words  <mongoURI>

dotenv.config({silent: true})

var config = {};
config.environment = process.env.NODE_ENV.trim()
config.cronVar = process.env.CRON_VAR
config.environment = process.env.NODE_ENV
config.sendgridApiKey = process.env.SENDGRID_API_KEY

if (config.environment == "production") {
    logging.info(`[config] ${config.environment}`)
    config.mongodbURI = process.env.MONGODB_URI_PROD
    config.backendURL = process.env.BACKEND_URL_PROD
    config.backendPORT = process.env.PORT || process.env.BACKEND_PORT_PROD
}
if (config.environment == "test") {
    logging.info(`[config] ${config.environment}`)
    config.mongodbURI = process.env.MONGODB_URI_TEST
    config.backendURL = process.env.BACKEND_URL_TEST
    config.backendPORT = process.env.PORT || process.env.BACKEND_PORT_TEST
}
if (config.environment == "development") {
    logging.info(`[config] ${config.environment}`);
    config.mongodbURI = process.env.MONGODB_URI_DEV
    config.backendURL = process.env.BACKEND_URL_DEV
    config.backendPORT = process.env.BACKEND_PORT_DEV 
}

export default config;