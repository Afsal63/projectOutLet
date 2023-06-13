module.exports = {
  url: `mongodb+srv://${process?.env?.MONGODB_USERNAME}:${process?.env?.MONGODB_PASSWORD}@${process?.env?.MONGODB_DATABASE}.krrfasw.mongodb.net/?retryWrites=true&w=majority`,
  username: process?.env?.MONGODB_USERNAME,
  password: process?.env?.MONGODB_PASSWORD,
  dbName: process?.env?.MONGODB_DATABASE,
};
