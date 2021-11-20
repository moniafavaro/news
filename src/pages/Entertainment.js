import { useState, useEffect } from 'react';
import axios from 'axios';
import EntertainmentStories from '../components/EntertainmentStories';


const Entertainment = () => {

    const [news, setNews] = useState([])
  
    useEffect(() => {
      async function getNews() {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=gb&category=entertainment&apiKey=f0043f2035b34ff3b5934f9f39e51873`
        );
        console.log(response.data.articles)
        setNews(response.data.articles)
      }
      getNews()
    }, [])
    
    
    return (
      <div className="entertainment-positioning">
        {news.map((newspiece, i) => (
        i <= 9 ? <EntertainmentStories key={news[i]} {...newspiece}/> : false
        ))}
      </div>
    )

}

export default Entertainment