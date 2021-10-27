import { useState, useEffect } from 'react';
import axios from 'axios';
import BusinessStories from '../components/BusinessStories';

const Business = () => {
    const [news, setNews] = useState([])

    const apiKey = '8c1f3ab3394248629bec933c893a511e'
  
    useEffect(() => {
      async function getNews() {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=8c1f3ab3394248629bec933c893a511e`)
        console.log(response.data.articles)
        setNews(response.data.articles)
      }
      getNews()
    }, [])
    
    
    return (
      <div className='business-positioning'>
        {news.map((newspiece, i) => (
        i <= 8 ? <BusinessStories key={news[i]} {...newspiece}/> : false
        ))}
      </div>
    )
}

export default Business
