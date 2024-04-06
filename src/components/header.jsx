// import 'primeicons/primeicons.css';
import { useShoppingCart } from './ShoppingCartContext';
import { Link } from 'react-router-dom';


const Header = () => {
  const {toggleCart} = useShoppingCart();
  return (
    <header>
        <h1>Smart Sole</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Womens</a></li>
                <li><Link to={"/women"}></Link></li>
            </ul>
        </nav>

        <div id="Cart"><i className='pi pi-shopping-cart' style={{fontSize:"2rem"}}onClick={toggleCart}></i></div>
    </header>
  )
}

export default Header