import './Footer.css';
import arrowDwn from '../../assets/img/down.svg';
import logo from '../../assets/img/bottomLogo.png';
import app1 from '../../assets/img/app-img1.png';
import app2 from '../../assets/img/app-img2.png';
import instLogo from '../../assets/img/insta.png';
import twittLogo from '../../assets/img/twitter.png';
import faceLogo from '../../assets/img/fb.png';


const Footer = () => {
  return (
    <section className='footer'>
      <div className='footer-info'>
        <div className='apps'>
          <img src={logo} alt="" />
          <div className='app-container'>
            <img src={app1} alt="" className='footer-app'/>
            <img src={app2} alt="" />
          </div>
        </div>
        <div>
          <h3 className='h3'>About us</h3>
          <p className='footer-p'>Concept</p>
          <p className='footer-p'>Franchise</p>
          <p className='footer-p'>Business</p>
          <p className='footer-p'>Restaurant signup</p>
          <p className='footer-p'>For Investors</p>
        </div>
        <div>
          <h3 className='h3'>Get help</h3>
          <p className='footer-p'>Read FAQs</p>
          <p className='footer-p'>Restaurants</p>
          <p className='footer-p'>Specialities</p>
          <p className='footer-p'>Sign up to deliver</p>
          <div className='take-language'>
          <p className='language-p'>English</p>
          <img src={arrowDwn} alt="arrow" />
          </div> 
        </div>
        <div>
          <h3 className='h3'>Contact us</h3>
          <p className='footer-p p'>Yellow kitchen Paris 11</p>
          <p className='footer-p p'>69 avenue de la Republique 75011 Paris</p>
          <p className='footer-p p'>0800 111 126</p>
          <p className='footer-p p'>contact@yellowkitchens.com</p>
        </div>
      </div>
      <div className='last'>
        <div className='socials'>
          <img src={instLogo} alt="" />
          <img src={twittLogo} alt="" />
          <img src={faceLogo} alt="" />
        </div>
        <div className='reserved'>
          <p className='bottom-text'>Privacy Policy</p>
          <p className='bottom-text'>Terms</p>
          <p className='bottom-text light'>© 2020 Yellow kitchen</p>
        </div>
      </div>
    </section>
  )
}

export default Footer
