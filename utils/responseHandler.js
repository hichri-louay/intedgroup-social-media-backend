const successResponse = (res, data, message, statusCode) => {
    res.status(statusCode || 200).json({
        success: true,
        message,
        data
    });
}

const errorResponse = (res, message) => {
    res.status(500).json({
        success: false,
        message
    });
}


module.exports = { successResponse, errorResponse };