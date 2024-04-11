import 'primeicons/primeicons.css';
import { Link } from 'react-router-dom';
import { useShoppingCart } from './ShoppingCartContext';




const Header = () => {
  const { toggleCart } = useShoppingCart();
  return (
    <header>
        <Link to="/" className='no-underline'><h1>Smart Sole</h1></Link>
        <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/men">Men's Products</Link></li>
            <li><Link to="/women">Women's Products</Link></li>
            </ul>
        </nav>

        <div id="Cart"><i className='pi pi-shopping-cart cart-icon' style={{fontSize:"2rem"}} onClick={toggleCart}></i></div>
    </header>
  )
}

export default Header