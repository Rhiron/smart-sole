import shoesData from '../Data.json'; // replace with the path to your JSON file

import clarks_laurieann from '../images/clarks_laurieann.png';
import clarksMiraFlatTideSandel from '../images/clarksMiraFlatTideSandel.jpeg';
import k_kGenna from '../images/k_kGenna.png';
import K_KHailee from '../images/K_KHailee.png';
import blowfish_chelseabootie from '../images/blowfish_chelseabootie.png';
import converse_CTLift_sneaker from '../images/converse_CTLift_sneaker.png';
import clarkswestlynnLoafer from '../images/clarkswestlynnLoafer.png';
import birkenstock_Arizona from '../images/birkenstock_Arizona.png';
import taxiWinteranklebootie from '../images/taxiWinteranklebootie.png';
import asics_jolt from '../images/asics_jolt.png';
import BOBSBCutesneaker from '../images/BOBSBCutesneaker.png';
import { useNavigate } from 'react-router-dom';



const images = {
    'clarks_laurieann.png': clarks_laurieann,
    'clarksMiraFlatTideSandel.jpeg': clarksMiraFlatTideSandel,
    'k_kGenna.png': k_kGenna,
    'K_KHailee.png': K_KHailee,
    'blowfish_chelseabootie.png': blowfish_chelseabootie,
    'converse_CTLift_sneaker.png': converse_CTLift_sneaker,
    'clarkswestlynnLoafer.png': clarkswestlynnLoafer,
    'birkenstock_Arizona.png': birkenstock_Arizona,
    'taxiWinteranklebootie.png': taxiWinteranklebootie,
    'asics_jolt.png': asics_jolt,
    'BOBSBCutesneaker.png': BOBSBCutesneaker

  };

const ProductListWomen = () => {

  const navigate = useNavigate();
  const goToProductPage = (id) => navigate(`/product/${id}`);

  return (
    <div id='productlist'>
      <h2>Womens Shoes</h2>
        <div id='productcont'>
        {shoesData.product.filter(item => parseInt(item.productId) >= 3000 && parseInt(item.productId) <= 3499).map((item, index) => (
          <div className='scrollbox' key={index} style={{cursor:"pointer"}} onClick={() => goToProductPage(item.productId)}>
              <img src={images[item.image.split('/').pop()]} alt="" className='scrollimgs'/>
              <h3>{item.name}</h3>
              <h4>${item.price}</h4>
          </div>
    ))}
        </div>
    </div>  
    )
}

export default ProductListWomen