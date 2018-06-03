const bcrypt = require('bcrypt')

function hashPassword (user, options) {
  const SALT_FACTOR = 8

  if (!user.changed('password')) {
    return
  }

  return bcrypt.genSalt(SALT_FACTOR)
    .then(salt => bcrypt.hash(user.password, salt))
    .then(hash => {
      console.log('hashed: ', hash)
      user.password = hash
      // user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      // 一些情况下，同时声明几个钩子函数会使得加密出错
      // beforeCreate: hashPassword,
      // beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  })

  User.prototype.comparePassword = function (password) {
    return bcrypt.compare(password, this.password, null)
  }

  return User
}
