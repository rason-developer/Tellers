import winston from "winston";

const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(), // Add colorization
                winston.format.simple()    // Simple formatting
            ),
        }),
        new winston.transports.File({filename:"error.log", level:"error"}),
        new winston.transports.File({filename:"combined.log"})
    ]
});

export default logger;