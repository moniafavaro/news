import { useState, useEffect } from 'react';
import axios from 'axios';
import TopStories from '../components/TopStories';
import '../styles/Home.css'

const Home = () => {
    const [news, setNews] = useState([])

    const apiKey = '8c1f3ab3394248629bec933c893a511e'

    useEffect(() => {
    async function getNews() {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=8c1f3ab3394248629bec933c893a511e`)
        console.log(response.data.articles)
        setNews(response.data.articles)
    }
    getNews()
    }, [])

    return (
        <section>
            <h1>MONTAN NEWS</h1>
            <div>
                {news.map((newspiece, i) => (
                <TopStories key={news[i]} {...newspiece} />
                ))}
            </div>
        </section>
    )
}

export default Home
