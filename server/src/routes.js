const AuthenticationController = require('./controller/AuthenticationController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

const SongsController = require('./controller/SongsController')

module.exports = (app) => {
    app.post('/register', 
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

    app.post('/login',
    AuthenticationController.login)

    app.get('/song',
    SongsController.index)
    app.post('/song',
    SongsController.post)
}
