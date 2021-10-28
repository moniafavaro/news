const SearchList = ({ title, url, urlToImage }) => {
    return (
      <div className='search-list-box'>
        <h3>
          <a target="_blank" href={url} >
          {title}
          </a>
        </h3>
        <picture>
          <img src={urlToImage} />
        </picture>
      </div>
    )
  }
  
  export default SearchList