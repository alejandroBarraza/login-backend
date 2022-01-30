const Joi = require('joi')

// Register validation schema
const RegisterValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string().alphanum().min(3).max(20).required(),
        password: Joi.string()
            // .pattern(new RegExp('^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{6,}$'))
            .required(),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .required(),
    })

    return schema.validate(data)
}

// Login validation schema
const loginValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string().alphanum().min(3).max(20).required(),
        password: Joi.string()
            // .pattern(new RegExp('^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{6,}$'))
            .required(),
    })

    return schema.validate(data)
}

// forgotPassword validarion schema
const forgotPasswordValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .required(),
    })

    return schema.validate(data)
}

module.exports = { RegisterValidation, loginValidation, forgotPasswordValidation }
