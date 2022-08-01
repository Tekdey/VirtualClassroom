const User = require('../schema/User')
const bcrypt = require('bcrypt')
const {generateAccessToken, verifyRefreshToken, generateRefreshToken} = require('../utils/jwt.helper')


module.exports = {
    async login (req, res) {
        const {email, password} = req.body

        if(!email && !password){
            return res.status(403).send('Veuillez remplir les champs')
        }

        try {
            const user = await User.findOne({contact: {email}}, {_id: 0, role: 1, username: 1, password: 1, first_name: 1, last_name: 1, contact: {email: 1}})

            if(!user){
                return res.status(401).send('Mauvais email ou mot de passe')
            }

            const passwordMatch = await bcrypt.compare(password, user.password)

            if(!passwordMatch){
                return res.status(401).send('Mauvais email ou mot de passe')
            }

            user.password = null

            const accessToken = await generateAccessToken(user)
            const refreshToken = await generateRefreshToken(user)
            return res.status(200).json({accessToken, refreshToken})
        }catch (error) {
            console.log(error)
            res.status(500).json({message: 'Erreur du serveur, réessayer ultérieurement', error})
        }
    },
    async auth (req, res) {

        return res.json({loggedIn: true})
    },
    async issueAccess (req, res) {
        const {refreshToken} = req.body

        const response = verifyRefreshToken(refreshToken)
        if(response.status !== 200){
            return res.status(401).send('Token invalide, veuillez vous reconnecter');
        }

        const newAccessToken = generateAccessToken(response.user)

        return res.status(200).json({accessToken: newAccessToken})
    }
}