import './App.css';
import NavBar from '../src/component/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/product';
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/cart';
import Footer from './component/Footer/Footer';
import men_banner from './component/Assets/men_banner.jpg';
import women_banner from './component/Assets/women_banner.jpg';
import kid_banner from './component/Assets/kid_banner.jpg';
import ShopContextProvider from './component/Context/ShopContext';

function App() {
  return (
    <div>
      <BrowserRouter>
      {/* <ShopContextProvider> */}
      <NavBar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path="/women" element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path="/kid" element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
        <Route path=':product.Id' element={<Product/>}/>
        </Route>
        
        {/* </ShopContextProvider> */}

        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
