import React from 'react'
import img from '../images/Banner.png'
import { Link } from 'react-router-dom';

export const Banner = () => {
  return (
    <div id='Banner'>
      <div id='Bannerimg'>
        <img src={img} alt="" />
      </div>
    <h2 id='Bannertxt'>your shoes <br />should be <br />comfortable.</h2>
    <div id='ShopBox'>
    <Link to="/men" id='ShopNow'>Shop Now</Link>
    </div>
</div>
  )
}

export default Banner