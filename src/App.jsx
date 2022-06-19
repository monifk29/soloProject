// import { AllRoutes } from "./components/Allroutes";


import {Navbar} from "./components/Navbar"

import {Routes,Route} from "react-router-dom"
import {Home} from "./pages/Home"
import {SignIn} from "./pages/SignIn"
import {Products} from "./pages/Products"
import { Carousel } from "./components/Carousel"
import {Footer} from "./components/Footer"


function App() {
  return (
    <div>
      <Navbar/>
     
      <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/signIn" element={<SignIn/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/carausel" element={<Carousel/>}/>

</Routes>

<Footer/>
      
    </div>
  );
} 

export default App;
