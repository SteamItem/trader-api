import Log = require('../models/log');

function create(message: string) {
    const log = new Log.default({ message });
    return log.save();
}

async function findLastTen() {
    return Log.default.find().sort({_id:-1}).limit(10);
}

export = {
    create,
    findLastTen
}