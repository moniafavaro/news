
const TopStories = ({ title, urlToImage }) => {
  return (
    <div>
  
      <picture>
      <h3>
        {title}
      </h3>
        <img src={urlToImage} />
      </picture>
    </div>
  )
}


export default TopStories
