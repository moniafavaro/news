import "../styles/Home.css";
// import "../styles/App.css";

const TopStories = ({ title, description, url, urlToImage }) => {


  return (
    <div className="top-stories">
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
                ? "https://www.saracendistribution.co.uk/wp-content/uploads/2017/01/latest-news-and-tips.jpg"
                : urlToImage
            }
            alt={`${title}`}
            width="99%"
            height="100%"
          />
        </picture>
      </div>
    </div>
  );
};

export default TopStories;
