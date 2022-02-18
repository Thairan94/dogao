
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import Lista from './components/Lista';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes, Switch  } from 'react-router-dom'

function App() {
  return (
      <Router>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='menu' element = {<Menu/>} />
        <Route path='lista' element = {<Lista/>} />
      </Routes>
      <Footer/>
    </div>
      </Router>
  );
}

export default App;
