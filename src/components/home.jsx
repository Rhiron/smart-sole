import Banner from '../components/banner';
import shoesData from '../Data.json'; 
import brandimg1 from '../images/Brands.png';
import clarks_laurieann from '../images/clarks_laurieann.png';
import clarksMiraFlatTideSandel from '../images/clarksMiraFlatTideSandel.jpeg';
import k_kGenna from '../images/k_kGenna.png';
import K_KHailee from '../images/K_KHailee.png';
import blowfish_chelseabootie from '../images/blowfish_chelseabootie.png';
import converse_CTLift_sneaker from '../images/converse_CTLift_sneaker.png';
import clarkswestlynnLoafer from '../images/clarkswestlynnLoafer.png';
import birkenstock_Arizona from '../images/birkenstock_Arizona.png';
import birkenstockLowBend from '../images/birkenstockLowBend.png';
import colehann_oxford from '../images/colehann_oxford.png';
import clarks_tilden_oxford from '../images/clarks_tilden_oxford.png';
import chuck_taylor_all_star_high_street_high_top_sneaker from '../images/chuck-taylor-all-star-high-street-high-top-sneaker.png';
import columbia_norton_hikingboot from '../images/columbia_norton_hikingboot.png';
import merrell_runningshoe from '../images/merrell_runningshoe.png';
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
    'birkenstockLowBend.png': birkenstockLowBend,
    'colehann_oxford.png': colehann_oxford,
    'clarks_tilden_oxford.png': clarks_tilden_oxford,
    'chuck-taylor-all-star-high-street-high-top-sneaker.png': chuck_taylor_all_star_high_street_high_top_sneaker,
    'columbia_norton_hikingboot.png': columbia_norton_hikingboot,
    'merrell_runningshoe.png': merrell_runningshoe,
    'taxiWinteranklebootie.png': taxiWinteranklebootie,
    'asics_jolt.png': asics_jolt,
    'BOBSBCutesneaker.png': BOBSBCutesneaker

  };




const Home = () => {

    const navigate = useNavigate();

    const goToProductPage = (id) => navigate(`/product/${id}`);
    return (
      <div>
          <Banner/>
          <div id='Home'>
          <div id='HomeMensSection'>
              <h2>Mens</h2>
              <div id='MenScroll'>
                    {shoesData.product.filter(item => parseInt(item.productId) > 3499).map((item, index) => (
                <div className='scrollbox' key={index} style={{cursor:"pointer"}} onClick={() => goToProductPage(item.productId)}>
                    <img src={images[item.image.split('/').pop()]} alt="" className='scrollimgs'/>
                    <h3>{item.name}</h3>
                    <h4>${item.price}</h4>
                </div>
            ))}
              </div>
          </div>
          <div id='HomeWomensSection'>
              <h2>Womens</h2>
              <div id='WomenScroll'>
              {shoesData.product.filter(item => parseInt(item.productId) >= 3000 && parseInt(item.productId) <= 3499).map((item, index) => (
                <div className='scrollbox' key={index} style={{cursor:"pointer"}} onClick={() => goToProductPage(item.productId)}>
                    <img src={images[item.image.split('/').pop()]} alt="" className='scrollimgs'/>
                    <h3>{item.name}</h3>
                    <h4>${item.price}</h4>
                </div>
                 ))}
              </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <h2>Our Brands</h2>
          <div id='OurBrand'>
                    <img src={brandimg1} alt="" />


          </div>
          </div>
      </div>
    )
  }
  
  export default Home