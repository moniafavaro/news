import { useState, useEffect } from 'react';
import axios from 'axios';
import TopStories from '../components/TopStories';
import '../styles/Home.css'

const Home = () => {
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
        <section>
            <div className='home-top'>
                {news.map((newspiece, i) => (
                i <= 0 ? <TopStories key={news[i]} {...newspiece}/> : false
                ))}
            </div>
            <hr className='home-hr'></hr>
            <div className='home-bottom'>
                {news.map((newspiece, i) => (
                    // if (news[0].description.length < 50) {
                    //     i += 1
                    // }
                i > 0 && i <= 2 ? <TopStories key={news[i]} {...newspiece}/> : false
                ))}
            </div>
        </section>
    )
}

export default Home
