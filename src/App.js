import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppMovies from './components/AppMovies';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link className='navbar-brand' to="/movies">
      Movies
      </Link>
    </nav>
    <Routes>
      <Route path='/movies' element={<AppMovies />}/>
      <Route path='' element={<AppMovies />} />
    </Routes>
    </BrowserRouter>
    );
  }
  
  export default App;
  
  <AppMovies />