const app = require('./src/app');
const { UrlConstants } = require('./src/constants');

//Server
const PORT = process.env.PORT || UrlConstants.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});