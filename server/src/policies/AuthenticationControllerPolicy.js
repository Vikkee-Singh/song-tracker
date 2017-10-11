const Joi = require('joi')

module.exports = {
    register (req, res, next){
        const schema = {
            email: Joi.string().email(),///^[a-zA-Z0-9]{8,32}$/
            password: Joi.string().regex(
                new RegExp(/^[a-zA-Z0-9]{8,32}$/)
            )
        }
        const {error, value} = Joi.validate(req.body, schema)

        if (error) {
            switch (error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error: 'you must provide a valid email address'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: 'The password provied failed to match the following rules:<br> 1. It must contain ONLY the following charactors : lower case upper case numerics<br> 2 .It must be at least 8 charactors in length and not greater than 32 charactors in length.'
                    })
                    break
                default:
                res.status(400).send({
                    error: 'Ivalid register information'
                })
            }
        } else {
            console.log("All Right");
            next()        
        }
    }
}
