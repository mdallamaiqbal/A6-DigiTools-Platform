
import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Tools from './Components/Tools/Tools'
import Banner from './Components/UI/Banner/Banner'
import Cart from './Components/UI/Banner/Cart'
import Count from './Components/UI/Banner/Count'
import Premium from './Components/UI/Banner/Premium'
import Section from './Components/UI/Banner/Section'

const getDigiTools= async () =>{
  const res =await fetch('/digitools.json');
  return res.json()
}
const digiToolsPromise=getDigiTools();

function App() {
 const [showTab,setShowTab]=useState('tools')
 const [carts,setCarts]=useState([])
  return (
    <>
    <Navbar carts={carts}/>
    <Banner/>
    <Count/>
    <Premium setShowTab={setShowTab} carts={carts}/>
    {showTab ==='tools' && <Tools digiToolsPromise={digiToolsPromise} carts={carts} setCarts={setCarts}/>}
    {showTab ==='cart' && <Cart carts={carts} setCarts={setCarts}/>}
    <Section/>
    <Footer/>
    </>
  )
}

export default App
