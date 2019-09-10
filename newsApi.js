const apiKey = process.env.REACT_APP_NEWSAPI_API_KEY
const topHeadlinesUrl =
  'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + apiKey;

export { apiKey, topHeadlinesUrl };
