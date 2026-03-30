import './App.css'
import Kassa from './components/Kassa'
import Ombor from './components/Ombor'
import Analtika from './components/Analtika'
import CreateProducts from './components/CreateProducts'
import { FaBasketShopping } from "react-icons/fa6";
import { FiClipboard } from "react-icons/fi";
import { IoMdAnalytics } from "react-icons/io";
import { TiEdit } from "react-icons/ti";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
function App() {


  return (
    <>
      <BrowserRouter>
<header>
  <Link to='/'>Kassa               {<FaBasketShopping />}</Link>
  <Link to='/ombor'>Obmor           {<FiClipboard />}</Link>
 <Link to='/analtika'>Analtika       {<IoMdAnalytics />}</Link>
  <Link to='/createProducts'>+Yangi Tovar           {<TiEdit />}</Link>
</header>
<Routes>
  <Route path='/' element={<Kassa />}/>
  <Route path='/ombor' element={<Ombor />}/>
  <Route path='/analtika' element={<Analtika />}/>
  <Route path='/createProducts' element={<CreateProducts />}/>
</Routes>


      </BrowserRouter>
    
    </>
  )
}

export default App
