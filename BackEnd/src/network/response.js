function success(req, res, message, data, status = 200) {
    res.status(status).json({
        success: true,
        message,
        data
    });
}

function error(req, res, message, status = 500) {
    res.status(status).json({
        success: false,
        message,
    });
}

module.exports = { success, error };