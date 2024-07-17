import './Hero.css';
import banner from '../../assets/img/Hero_img.png';
import timeEat from '../../assets/img/time-eat.png';
import delivery from '../../assets/img/delivery.svg';
import paris from '../../assets/img/paris.png';

const Hero = () => {
  return (
    <section>
      <div className='hero-first-container'>
      <div className='hero-title'>
        <h1>Your Food court<br /> at home</h1>
        <div className='buttons'>
          <div className='hero-btn'>
            <p>Delivery<br /><span>Order in</span></p>
          </div>
          <div className='hero-btn'>
            <p>Takeout<br /><span>Grab and go</span></p>
          </div>
        </div>
      </div>
      <div className='image'>
        <img src={banner}
        /* width={803}
        height={706} */
        alt="Food image" />
      </div>
      </div>
      <div className='hero-second-container'>
        <div className='hero-component-icon'>
          <img src={timeEat} alt="icon" />
          <p>Delivery in all paris<br /> in less than 30 minutes</p>
          </div>
        <div className='hero-component-icon'>
          <img src={delivery} alt="icon" />
          <p>Free delivery<br /> from 29 euros</p>
          </div>
        <div className='hero-component-icon'>
          <img src={paris} alt="icon" />
          <p>Only fresh<br /> and French products</p>
          </div>
      </div>
    </section>
  )
}

export default Hero
