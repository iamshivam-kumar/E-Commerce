import './NavBar.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {RiShoppingCartFill} from 'react-icons/ri';
function NavBar(){

    const[menu, setMenu]=useState("shop")
    return (
        
    <div className='navbar'>
        <div className='logo'>
        <h3>SHOPHERE</h3>       
        </div>
        
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/women'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kid'>Kid</Link>{menu==="kids"?<hr/>:<></>}</li>

        </ul>
        
        <div className='nav-login-cart'>
            {localStorage.getItem('auth-token')?
            <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
            :<Link to='/login'><button>Login</button></Link>}
            <Link to='/cart'><div className='cart'><RiShoppingCartFill/></div></Link>
            <div className='nav-cart-count'>0</div>

        </div>
            


    </div>
        
    );
}

export default NavBar;