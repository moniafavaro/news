import '../styles/TopStories.css'
import '../styles/Home.css'

const TopStories = ({ title, url, urlToImage }) => {  
  return (
    <div className="top-stories">
      <h3>
        <a target="_blank" href={url}>
          {title}
        </a>
      </h3>
      <picture>
        <img src={urlToImage} alt={`${title}`} width="99%" height="80%" />
      </picture>
    </div>
  );
}


export default TopStories
