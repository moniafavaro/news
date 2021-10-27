import '../styles/TopStories.css'

const TopStories = ({ title, url, urlToImage }) => {
  return (
    <div className='top-stories'>
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


export default TopStories
