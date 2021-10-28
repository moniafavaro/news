import { useState, useEffect } from 'react';
import axios from 'axios';
import TopStories from '../components/TopStories';
import '../styles/Home.css'

const Home = () => {
    const [news, setNews] = useState([])

    const apiKey = '8c1f3ab3394248629bec933c893a511e'

    useEffect(() => {
    async function getNews() {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=38e2212a69f943c58ae6b087ad833ad6`)
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
            <div className='home-bottom'>
                {news.map((newspiece, i) => (
                i > 0 && i <= 2 ? <TopStories key={news[i]} {...newspiece}/> : false
                ))}
            </div>
        </section>
    )
}

export default Home
