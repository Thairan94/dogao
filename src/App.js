
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route, Routes, Switch  } from 'react-router-dom'

function App() {
  return (
      <Router>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='menu' element = {<Menu/>} />
      </Routes>
    </div>
      </Router>
  );
}

export default App;
