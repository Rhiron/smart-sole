import 'primeicons/primeicons.css';

const header = () => {
  return (
    <header>
        <h1>Smart Sole</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Womens</a></li>
                <li><a href="#">Mens</a></li>
            </ul>
        </nav>

        <div id="Cart"><i className='pi pi-shopping-cart' style={{fontSize:"2rem"}}></i></div>
    </header>
  )
}

export default header