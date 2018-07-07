require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'development',
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWT_SECRET || 'chatting_app',
  jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES || 15,
  mongo: {
    uri: process.env.MONGODB_URI || 'mongodb://admin:Adm!nuser1@ds129821.mlab.com:29821/brownfox',
  },
};

module.exports = config;
