import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home'
import Search from './pages/Search';
import Game from './pages/Game';
import Browse from './pages/Browse';
import Error from './pages/Error';

function App() {
  const { name } = useParams()

  return (
    <Router>
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/browse' element={<Browse />} />
        <Route path='/:name' element={<Game name={ name } />} />
        <Route pate='/*' element={<Error />} />
      </Routes>

    </div>
    </Router>
  );
}

export default App;
