import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import MovieDetail from './homeComponents/MoviesComponents/MovieDetail';
import Login from './components/Login';

function App() {
  return (
    <div className='App'>
            <Router>
              <Header />
              {/* <Switch>
                <Route path='/login'>
                  <Login />
                </Route>
                <Route path='/detail/:id'>
                  <MovieDetail />
                </Route>
                <Route path='/'>
                  <Home />
                </Route>
              </Switch> */}
            </Router>
    </div>
  );
}

export default App;