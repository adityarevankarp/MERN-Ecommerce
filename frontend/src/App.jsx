import Navbar from "./Components/Navbar/Navbar"

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from "./Pages/Shop"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import LoginSignup from "./Pages/LoginSignup"
import Cart from "./Pages/Cart"
import Footer from "./Components/Footer/Footer"
import abstract_banner from './Components/Assets/banner_abstract.png'
import portrait_banner from './Components/Assets/banner_portrait.png'
import oil_banner from './Components/Assets/banner_oil.png'

function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={abstract_banner} category="portraits"/>}/>
        <Route path='/womens' element={<ShopCategory banner={portrait_banner} category="abstract"/>}/>
        <Route path='/kids' element={<ShopCategory banner={oil_banner} category="OilPaint"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App
