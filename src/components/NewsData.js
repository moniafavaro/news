import { useState, useEffect } from 'react';
import axios from 'axios';
import TopStories from './TopStories';

const NewsData = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    async function getNews() {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=gb&apiKey=f0043f2035b34ff3b5934f9f39e51873`
      );
      console.log(response.data.articles)
      setNews(response.data.articles)
    }
    getNews()
  }, [])
  
  
  return (
    <div>
      {news.map((newspiece, i) => (
      <TopStories key={news[i]} {...newspiece} />
      ))}
    </div>
  )
}

export default NewsData
