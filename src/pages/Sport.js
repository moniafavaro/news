import { useState, useEffect } from 'react';
import axios from 'axios';
import SportStories from '../components/SportStories';
import '../styles/App.css'

const Sport = () => {
    const [news, setNews] = useState([])

    const apiKey = '8c1f3ab3394248629bec933c893a511e'
  
    useEffect(() => {
      async function getNews() {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=38e2212a69f943c58ae6b087ad833ad6`)
        console.log(response.data.articles)
        setNews(response.data.articles)
      }
      getNews()
    }, [])
    
    
    return (
      <div className="sports-positioning">
        {news.map((newspiece, i) => (
          i <= 8 ? <SportStories key={news[i]} {...newspiece}/> : false
        ))}
      </div>
    )
}

export default Sport
