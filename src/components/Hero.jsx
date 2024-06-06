import './Hero/Hero.css';
import banner from '../assets/img/Hero_img.png';

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
        width={803}
        height={706}
        alt="Food image" />
      </div>
      </div>
      <div className='hero-second-container'>

      </div>
    </section>
  )
}

export default Hero
