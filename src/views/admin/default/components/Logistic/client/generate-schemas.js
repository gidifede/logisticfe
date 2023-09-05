
const path = require('path');
const { generate } = require('openapi-typescript-validator');

generate({
  schemaFile: path.join(__dirname, 'swagger.json'),
  schemaType: 'json',
  directory: path.join(__dirname, '/generated')
})
