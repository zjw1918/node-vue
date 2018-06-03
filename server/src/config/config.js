module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'demo001',
    user: process.env.DB_USER || 'demo001',
    password: process.env.DB_PASS || 'demo001',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './demo001.sqlite'
    }
  },
  auth: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
