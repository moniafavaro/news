import { useEffect, useState } from "react"
import axios from "axios"
import SearchList from "./SearchList"
import { useLocation } from "react-router"

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const Search = () => {
  const [news, setNews] = useState([])
  let query = useQuery()

  const apiKey = '8c1f3ab3394248629bec933c893a511e'
    
  async function getSearchedNews() {
      const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=gb&category=${query.get('q')}&apiKey=38e2212a69f943c58ae6b087ad833ad6`
      );
      console.log(response.data.articles);
      setNews(response.data.articles);
  }
  
  useEffect(() => {
    getSearchedNews()
  }, [] )


  return (
    <div>
      <div className="container">
        {news.map((search, i) =>
          i <= 8 ? <SearchList key={news[i + 10]} {...search} /> : false
        )}
      </div>
    </div>
  );
}

export default Search
