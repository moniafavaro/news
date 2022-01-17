## MONTANnews


## Goal

Design a news website aggregator where you can see the top news in the UK, using JavaScript, ReactJS and CSS.  

## Timeframe

Timeframe: 48 hours.
 
## Inspiration

For this project in pair programming we decided to go with a news website aggregator, where people can see the top news in the UK and read them in the place they were originally published. 

The design was inspired by "The New York Times", the website being in black and white.

## Project Overview

https://user-images.githubusercontent.com/60261970/147978301-07d90d64-2740-45d9-b534-11699398e0ed.mp4

## Deployment

The website can be viewed here, however, we have found out that the api only works locally:

https://montannews2021.netlify.app/

## Getting Started

We used an API from where we could get the updated news.

First part was to make the homepage work with a few news and centering them in each box.

<p align='center'>
    <img width='500' height='360' src='https://user-images.githubusercontent.com/60261970/148036888-c4b4446a-cdaf-4374-812f-6f14a10b3c6c.png'>
</p>

When the homepage was working just fine, we started with the other pages that we set to have, those were 'Business', 'Sports' and 'Entertainment'.

<p align='center'>
    <img width='500' height='360' src='https://user-images.githubusercontent.com/60261970/148037328-26cac3b9-db72-47d0-aa38-5907f136618a.png'>
</p>
<p align='center'>
    <img width='500' height='360' src='https://user-images.githubusercontent.com/60261970/148037334-36713e7e-f4ed-4ed3-b5a2-1ee07781fb65.png'>
</p>

To set the other pages was easy, we just had to make something similar with the home page and the code for them is basically the same.

When the other pages were working perfectly, we decided to add a search bar.

That was the next step, when the search bar was working our job was done.

We only had 48 hours to finish this project, so the website doesn't have many functionalities, but it works very well and satisfies the MVP.


## Technologies Used

* JavaScript
* CSS3
* ReactJS
* Google Fonts
* VS Code
* Chrome
* Git and GitHub

## Planning

As we learnt through the course, it is best practice to start with a pseudocode.

So we had a wireframe to show how we wanted the website to look like, and the pseudocode with all the functionalities we wanted to add.

This is the wireframe for the homepage:

<p align='center'>
    <img width='500' height='360' src='https://user-images.githubusercontent.com/60261970/148035736-04082bca-4752-453a-8df4-4c07e236993a.png'>
</p>

This is for the other pages, Business, Sports and Entertainment:

<p align='center'>
    <img width='500' height='360' src='https://user-images.githubusercontent.com/60261970/148035841-05dea9cb-61a0-4605-9faf-54f8595b8fab.png'>
</p>

## Build

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


## Challenges

* Having only 48 hours to work on a project with little React knowledge was not at all easy by any stretch but deciding on which parts of the app should be finished in order to reach the MVP prior to our presentation would have been the biggest challenge for us both.


## Wins 

* Being able to get the data to successfully display on each page with the power of Axios was of course a great win as this was the main source for being able to include more functionality to our website.
* Learning where data is stored and being able to manipulate it so that it looked relevant to our design of the application was another win.

## Future Features

* Pagination: displaying more data on different pages would make the website look almost complete.

## Key Learnings

* Communication: I had of course worked in teams for daily challenges which came as practice for this important task that goes on both mine and Kirtan's portfolio and both of us being able to share and discuss our different ideas added to my team work experience for industry practices.
* Axios requests.
* React.js – useEffect and useState.
* React-Router-DOM


## Teamwork

As far as teamwork goes, Kirtan and I worked really well together, we both used the VSCode LiveShare extension from my desktop and discussed every piece of code and decision when we started working together. However, without telling each other, myself and Kirtan had done some homework prior to the day we started working. Kirtan simply made the request to grab all the data with the function below so we could start manipulating the data and displaying it and I had already worked on the `navigation bar` and had made sure we could click on a page. We both surprised each other and I think it shows that we are both willing to go the extra mile for the team.

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


