## MONTANnews - Website tour

https://user-images.githubusercontent.com/60261970/147978301-07d90d64-2740-45d9-b534-11699398e0ed.mp4


# Description

First pair programming project with GA.

Designed a news website aggregator where you can see the top news in the UK, using JavaScript, ReactJS and CSS.  Timeframe: 48 hours.

# Deployment

The website can be viewed here, however, we have found out that the api only works locally:

https://montannews2021.netlify.app/
 
# Inspiration

For this project in pair programming we decided to go with a news website aggregator, where people can see the top news in the UK and read them in the place they were originally published. 

The design was inspired by "The New York Times", the website being in black and white.

# Getting Started

As we learnt through the course, it is best practice to start with a pseudocode.

So we had a wireframe to show how we wanted the website to look like, and the pseudocode with all the functionalities we wanted to add.

This is the wireframe for homepage:

![homepage](https://user-images.githubusercontent.com/60261970/148035736-04082bca-4752-453a-8df4-4c07e236993a.png)

This is for the other pages, Business, Sports and Entertainment:

![other_pages](https://user-images.githubusercontent.com/60261970/148035841-05dea9cb-61a0-4605-9faf-54f8595b8fab.png)

And the about page:

![about_page](https://user-images.githubusercontent.com/60261970/148035854-c9ba139d-ec9e-4a98-9cfc-045e9dd8f81e.png)

We used an API from where we could get the updated news.

First part was to make the homepage work with a few news and centering then in each box.

![homepage_done](https://user-images.githubusercontent.com/60261970/148036888-c4b4446a-cdaf-4374-812f-6f14a10b3c6c.png)

![homepage_code](https://user-images.githubusercontent.com/60261970/148037694-e6380e20-d54c-4da6-8971-e0a2d17fd08c.png)

When the homepage was working just fine, we started with the other pages that we set to have, those was 'Business', 'Sports' and 'Entertainment'.

![business_page](https://user-images.githubusercontent.com/60261970/148037306-a46d8958-914a-4dc5-8d91-19edf6713c22.png)
![sports_page](https://user-images.githubusercontent.com/60261970/148037328-26cac3b9-db72-47d0-aa38-5907f136618a.png)
![entertainment_page](https://user-images.githubusercontent.com/60261970/148037334-36713e7e-f4ed-4ed3-b5a2-1ee07781fb65.png)

To set the other pages was easy, we just had to make something similar with the home page and the code for them is basically the same.

![business_code](https://user-images.githubusercontent.com/60261970/148038207-87b5db38-ed64-4a4d-bbc1-5dafc2bf2c59.png)

When the other pages were working perfectly, we decided to add a search bar.

That was the next step, when the search bar was working our job was done.

We only had 48 hours to finish this project, so the website don't have many functionalities, but it work very well and satisfies the NVP.


# Framework used

* JavaScript
* CSS3
* ReactJS
* Google Fonts
* VS Code
* Chrome
* Git and GitHub


# Teamwork

As far as teamwork goes, Kirtan and I worked really well together, we both used the VSCode LiveShare extension from my desktop and discusssed every piece of code + descision when we started working together. However, without telling each other, myself and Kirtan had done some homework prior to the day we started working. Kirtan simply made the request to grab all the data with the function below so we could start manipulating the data and displaying it and I had already worked on the `navigation bar` and had made sure we can click on a page. We both surprised each other and I think it shows that we are both willing to go the extra mile for the team.

```
useEffect(() => {
    async function getNews() {
      const response = await axios.get(
      \\ We are happy to share our API KEY Below as its free to use
        `https://newsapi.org/v2/top-headlines?country=gb&apiKey=f0043f2035b34ff3b5934f9f39e51873`
      );
      console.log(response.data.articles)
      setNews(response.data.articles)
    }
    getNews()
}, [])
```

# Development Process

#### Search Bar

Below is a video displaying how our search bar works (something we worked on together). I think it's the best piece of JavaScript we have running in the background. I was really proud of this. First we loop through the possible list of categories the user can possibly search through using a `for loop`, if the user searches for one of the possible options listed in the dropdown menu they will be taken to the respective page. The user can also navigate through the `dropdown menu` and click on a given category.

https://user-images.githubusercontent.com/60261970/147979573-2be7d49f-e6ec-4470-aea1-8cc92c3683d0.mp4

#### Returning News Articles from the API

To get the latest news articles we used the below function: 

```
 const [news, setNews] = useState([])

    useEffect(() => {
      async function getNews() {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=f0043f2035b34ff3b5934f9f39e51873`
        );
        console.log(response.data.articles)
        setNews(response.data.articles)
     }
     getNews()
}, [])
```

and then mapped through the `array` using the below method:

```
<div className='business-positioning'>
      {news.map((newspiece, i) => (
        i <= 9 ? <BusinessStories key={news[i]} {...newspiece}/> : false
      ))}
</div>
```

The api returned thousands of results but we only wanted to display a short number of them so decided to use a `ternary operator` to prevent all of the data being returned. 

The latest news articles were always placed at the beginning of the array.
