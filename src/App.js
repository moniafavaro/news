import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Nav from './components/Nav';
import './App.css'
import Footer from './components/Footer';
import NewsData from './components/NewsData';

function App() {
  return (
    <Router>
        <header className='app-header'>
          <Nav />
        </header>
        <main>
          <NewsData />
          <Switch>
            <Route path='/' component={} />
            <Route path='/' component={} />
            <Route path='/' component={} />
            <Route path='/' component={} />
            <Route path='/' component={} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
    </Router>
  );
}

export default App;

