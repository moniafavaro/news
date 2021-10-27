
const BusinessStories = ({ title, url, urlToImage }) => {
    return (
      <div className='business-box'>
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
  
  
  export default BusinessStories