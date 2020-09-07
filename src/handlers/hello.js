import commonMiddleware from '../lib/commonMiddleware';
import cors from '@middy/http-cors';

const mysql = require('serverless-mysql')({
  config: {
    user     : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
    host     : process.env.DB_HOSTNAME,
    port     : process.env.DB_PORT
  }
});

async function hello(event, context, callback) {
  const response = {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello world!' })
  }
  callback(null, response);
}

export const handler = commonMiddleware(hello)
  .use(cors());