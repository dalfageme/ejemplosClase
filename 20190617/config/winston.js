const winston = require('winston');

var options = {
    file: {
        level: 'info',
        filename: './logs/app.logg',
        handleExceptions: true,
        format: winston.format.json(),
    },
    file: {
        level: 'error',
        filename: './logs/error.logg',
        handleExceptions: true,
        format: winston.format.json(),
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple(),
        )
    }
}

var logger = winston.createLogger({
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console),
    ],
    exitOnError: false
});

logger.stream = {
    write: function (message, encoding) {
        logger.info(message);
    }
}

module.exports = logger;