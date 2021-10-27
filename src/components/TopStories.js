
const TopStories = ({ title, url, urlToImage }) => {
  return (
    <div>
  
      <picture>
      <h3>
        <a target="_blank" href={url} >
        {title}
        </a>
      </h3>
        <img src={urlToImage} />
      </picture>
    </div>
  )
}


export default TopStories
