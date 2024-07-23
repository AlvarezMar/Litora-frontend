import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import BooksGrid from './components/BooksGrid';
import Login from './views/Login';

function App() {

  fetch("http://localhost:8080/api/v1/books").then(response => response.json()).then(data => console.log(data));
  
  return <div>
    <Navbar/>
    <Header/>
    <Routes>
      <Route path='/' element={<BooksGrid/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    <Footer/>
  </div>
}

export default App
