import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import BooksGrid from './components/BooksGrid';
import Login from './views/Login';

function App() {
  
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
