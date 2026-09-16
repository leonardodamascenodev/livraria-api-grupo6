function logger(req, res, next) {
    const dataHora = new Date().toISOString();
    console.log(`[${dataHora}] ${req.method} ${req.url}`);
    next();
}

module.exports = logger;