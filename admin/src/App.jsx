import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import AddProduct from './Components/AddProduct/AddProduct'
import ListProduct from './Components/ListProduct/ListProduct'
import Admin from './Pages/Admin/Admin'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Admin/>
      <Sidebar/>
      <AddProduct/>
      
    </div>
  )
}

export default App
