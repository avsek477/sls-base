async function hello(event, context, callback) {
  const response = {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello world!' })
  }
  callback(null, response);
}

export const handler = hello;