import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './views/Login';
import BookDetail from './views/BookDetail';
import Home from './views/Home';
import Features from './components/Features';
import CreateBook from './views/CreateBook';

function App() {
  
  return <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/bookDetail' element={<BookDetail/>}/>
      <Route path='/createBook' element={<CreateBook/>}/>

    </Routes>
    <Features/>
    <Footer/>
  </div>
}

export default App
