// handleCors.js - Refactored function to handle the OPTIONS verb
let handleCors = function (req, res) {
    res.header('Access-Control-Allow-Origin', req.header('Origin'));
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.sendStatus(200);
};
exports.handleCors = handleCors;
