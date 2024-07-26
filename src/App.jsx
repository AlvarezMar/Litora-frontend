import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './views/Login';
import BookDetail from './views/BookDetail';
import Home from './views/Home';

function App() {
  
  return <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/bookDetail' element={<BookDetail/>}/>

    </Routes>
    <Footer/>
  </div>
}

export default App
