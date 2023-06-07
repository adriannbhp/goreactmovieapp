/*third party */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/*Internal Source */
import Menu from './components/Menu';
import Home from './pages/Home';
import Movies from './pages/Movies';
import ShowMovie from './pages/Movies/Show';
import Genres from './pages/Genres';
import Admin from './pages/Admin';

/* Style */
import './App.css';
import ShowMoviesGenre from './pages/Genres/Show';
import MovieForm from './components/movies/MovieForm';

function App() {
  return (
    <Router>
    <div className="container" >
      <div className="row">
        <h1 className="mt-3">Go React Movie Project</h1>
        <hr className="mb-3" />
      </div>
      <div className="row">
        <div className="col-2 mb-3">
          <Menu/>
        </div>
        <div className="col-10">
            <Routes>
							<Route path='/' element={<Home />} />
							<Route exact path='/movies/:id' element={<ShowMovie />} />
							<Route path='/movies' element={<Movies />} />
              <Route
                exact
                path='/genres/:id/movies'
                element={<ShowMoviesGenre />}
              />
							<Route path='/genres' element={<Genres />} />
              <Route
                exact
                path='/admin/movies/create'
                element={<MovieForm />}
              />
              <Route
                exact
                path='/admin/movies/:id/create'
                element={<MovieForm />}
              />
              <Route exact path='/admin/movies/:id/edit'
                element={<MovieForm />} />
							<Route path='/admin' element={<Admin />} />
						</Routes>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;