
import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Tools from './Components/Tools/Tools'
import Banner from './Components/UI/Banner/Banner'
import Count from './Components/UI/Banner/Count'
import Premium from './Components/UI/Banner/Premium'
import Section from './Components/UI/Banner/Section'

const getDigiTools= async () =>{
  const res =await fetch('/digitools.json');
  return res.json()
}
const digiToolsPromise=getDigiTools();

function App() {
 

  return (
    <>
    <Navbar/>
    <Banner/>
    <Count/>
    <Premium/>
    <Tools digiToolsPromise={digiToolsPromise}/>
    <Section/>
    <Footer/>
    </>
  )
}

export default App
