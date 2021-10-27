
const EntertainmentStories = ({ title, url, urlToImage }) => {
    return (
      <div className='entertainment-box'>
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
  
  
  export default EntertainmentStories