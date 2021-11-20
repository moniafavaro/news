import '../styles/App.css'

const SportStories = ({ title, description, url, urlToImage }) => {
    return (
      <div className="sports-box">
        <div className="left-box">
        <h3>
          <a target="_blank" href={url} rel="noreferrer">
            {title}
          </a>
        </h3>
        <p>{description}</p>
        </div>
        <div className="right-box">
        <picture>
          <img
            src={
              urlToImage === null
                ? "https://www.kearsleywest.bolton.sch.uk/wp-content/uploads/2020/06/Latest_news_billboard.jpg"
                : urlToImage
            }
          />
        </picture>
        </div>
      </div>
    );
  }
  
  
  export default SportStories