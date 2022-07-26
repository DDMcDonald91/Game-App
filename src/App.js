import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home'
import Search from './pages/Search';
import Game from './pages/Game';
import Browse from './pages/Browse';


function App() {
  const { name } = useParams()

  return (
    <Router>
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/Game-App' element={<Home />} />
        <Route path='/Game-App/search' element={<Search />} />
        <Route path='/Game-App/browse' element={<Browse />} />
        <Route path='/Game-App/:name' element={<Game name={ name } />} />
      </Routes>

    </div>
    </Router>
  );
}

export default App;
