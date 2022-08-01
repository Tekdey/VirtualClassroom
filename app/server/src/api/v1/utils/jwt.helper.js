const jwt = require('jsonwebtoken')

const generateAccessToken = (data) => {
    return jwt.sign({data}, process.env.JWT_ACCESS_SECRET,{expiresIn: '1m'})
}

const generateRefreshToken = (data) => {
    return jwt.sign({data}, process.env.JWT_REFRESH_SECRET,{expiresIn: '7d'})
}

const verifyRefreshToken = (data) => {
    return jwt.verify(data, process.env.JWT_REFRESH_SECRET, function(error, decoded) {
        if(error){
            return {status: 401, message: error}
        }
        return {status: 200, user: decoded}
    })
}

module.exports = {generateAccessToken, verifyRefreshToken, generateRefreshToken}