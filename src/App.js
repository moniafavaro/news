import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Nav from './components/Nav';
import './App.css'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
        <header className='app-header'>
          <Nav />
        </header>
        <main>
          <Switch>
            <Route />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
    </Router>
  );
}

export default App;
