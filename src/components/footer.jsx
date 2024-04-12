import { Link } from 'react-router-dom';

const footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // if you want a smooth scrolling effect
    });
  };

  return (
    <footer>
        <div id='FootLogo'>
          <Link to="" onClick={scrollToTop} className="no-underline"><h1>Smart Sole</h1></Link>
          <h2>Website by MRK Designs</h2>
        </div>
    </footer>
  )
}

export default footer