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
        `https://newsapi.org/v2/top-headlines?country=gb&category=${query.get('q')}&apiKey=f0043f2035b34ff3b5934f9f39e51873`
      );
      console.log(response.data.articles);
      setNews(response.data.articles);
  }
  
  useEffect(() => {
    getSearchedNews()
  }, [] )


  return (
    <div>
      <div className="search-positioning">
        {news.map((search, i) =>
          i <= 9 ? <SearchList key={news[i + 10]} {...search} /> : false
        )}
      </div>
    </div>
  );
}

export default Search
