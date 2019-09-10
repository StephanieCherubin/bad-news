import './news-article.js';
import { topHeadlinesUrl } from './newsApi.js';

window.addEventListener('load', ()=> {
  fetchNews();
});

async function fetchNews() {
  const result = await fetch(topHeadlinesUrl);
  const json = await result.json();

  const main = document.querySelector('main');

  json.articles.forEach(article => {
    const element = document.createElement('news-article');
    element.article = article;
    main.appendChild(element);
  });
}