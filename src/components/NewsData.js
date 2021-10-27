import { useState, useEffect } from 'react';
import axios from 'axios';
import TopStories from './TopStories';

const NewsData = () => {
  const [news, setNews] = useState([])

  const apiKey = '8c1f3ab3394248629bec933c893a511e'

  useEffect(() => {
    async function getNews() {
      const response = await axios.get('https://newsapi.org/v2/everything?q=keyword&apiKey=8c1f3ab3394248629bec933c893a511e')
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
