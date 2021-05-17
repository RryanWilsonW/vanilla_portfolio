import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Footer from './components/Footer';
import Header from "./components/Header";
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import './assets/styles/app.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path={['/', '/about', '/ryans_reacting_portfolio/']}>
            <About />
          </Route>
          <Route exact path='/portfolio'>
            <Portfolio />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
        </Switch>
        <Footer />
        </Router>
    </div>
  );
}

export default App;
