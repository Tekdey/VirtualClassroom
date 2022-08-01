const jwt = require('jsonwebtoken')
const {decode} = require("jsonwebtoken");

module.exports = {
    checkAuthenticated(req, res, next){

        const authHeader = req.headers['authorization']
        if(!authHeader || !authHeader.startsWith('Bearer ')){
            return res.status(401).send('Token invalide, veuillez vous reconnecter');
        }
        const token = authHeader.split(' ')[1]

        jwt.verify(token, process.env.JWT_ACCESS_SECRET, function(error, decoded){
            if(error){
                return res.status(401).send('Token invalide, veuillez vous reconnecter');
            }
            req.user = decoded
            next()
        })
    }

}