import { Route, Routes } from 'react-router-dom'
import './App.css'
import BooksGrid from './components/booksGrid/BooksGrid'
import Navbar from './components/navbar/Navbar'
import Login from './views/login/Login'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

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
