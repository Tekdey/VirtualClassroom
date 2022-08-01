const router = require('express').Router()
const user = require('../controller/User')
const middleware = require('../middleware')

router.post('/user/login', user.login)
router.get('/user/auth', middleware.checkAuthenticated, user.auth)
router.post('/user/auth/issue-access', user.issueAccess)

module.exports = router