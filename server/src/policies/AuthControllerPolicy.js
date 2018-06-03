const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const {error} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'invalid email'
          })
          break
        case 'password':
          res.status(400).send({
            error: `invalid password; 1. 8~32 length; 2. lowcase or uppercase or digital`
          })
          break
        default:
          res.status(400).send({
            error: 'invalid regist infomation'
          })
          break
      }
    } else {
      next()
    }
  }
}
