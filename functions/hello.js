exports.handler = async event => {
  console.log(event);
  const subject = event.queryStringParameters.name;
  return {
    statusCode: 200,
    body: `Hello ${subject}`
  };
};
