import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NotFound } from 'http-errors'
import { useState } from 'react'
import Nav from './components/Nav'
import Sport from './pages/Sport'
import Entertainment from './pages/Entertainment'
import Business from './pages/Business'
import About from './pages/About'
import Home from './pages/Home'
import Search from './pages/Search'
import './styles/App.css'

function App() {
  const [search, setSearch] = useState()

  const clearSearch = () => {
    setSearch('')
  }

  return (
    <Router>
      <header className="app-header">
        <h2 className='name'>MONTANnews</h2>
        <Nav />
        <hr></hr>
      </header>
      <main className="main-pages">
        <Switch>
          <Route path='/search' component={Search} />
          <Route path="/sport" component={Sport} />
          <Route path="/entertainment" component={Entertainment} />
          <Route path="/business" component={Business} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;

