import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav';
import './styles/App.css'
import Footer from './components/Footer';
import Sport from './pages/Sport';
import Entertainment from './pages/Entertainment';
import Business from './pages/Business';
import About from './pages/About';
import Home from './pages/Home';
import { NotFound } from 'http-errors';

function App() {
  return (
    <Router>
        <header className='app-header'>
          <h1>MONTAN NEWS</h1>
          <Nav />
        </header>
        <main>
          <Switch>
            <Route path='/sport' component={Sport} />
            <Route path='/entertainment' component={Entertainment} />
            <Route path='/business' component={Business} />
            <Route path='/about' component={About} />
            <Route exact path='/' component={Home} />
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

