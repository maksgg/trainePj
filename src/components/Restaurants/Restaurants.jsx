import './Restaurants.css';
import restImg1 from '../../assets/img/rest-img1.png';
import restLogo1 from '../../assets/img/rest-logo1.svg';
import restImg2 from '../../assets/img/rest-img2.png';
import restLogo2 from '../../assets/img/rest-logo2.svg';
import restImg3 from '../../assets/img/rest-img3.png';
import restLogo3 from '../../assets/img/rest-logo3.svg';
import restImg4 from '../../assets/img/rest-img4.png';
import restLogo4 from '../../assets/img/rest-logo4.svg';
import arrLeft from '../../assets/img/arr-left.svg';
import arrRight from '../../assets/img/arr-right.svg';

const Restaurants = () => {
  return (
    <>
      <section className='restaurants'>
        <div className='rest_container1'>
          <h2 className='h2'>Restaurants</h2>
          <div className='rest-btn'>
            show all
          </div>
        </div>
        <div className='rest_container2'>
          <div className='card-preview'>
            <img 
            className='rest-img'
            src={restImg1} 
            alt="Food" />
            <img 
            className='rest-logo'
            src={restLogo1}
            width={150}
            height={70} 
            alt="Logo" />
          </div>
          <div className='card-preview'>
            <img 
            className='rest-img'
            src={restImg2} 
            alt="Food" />
            <img 
            className='rest-logo'
            src={restLogo2}
            width={150}
            height={70} 
            alt="Logo" />
          </div>
          <div className='card-preview'>
            <img 
            className='rest-img'
            src={restImg3} 
            alt="Food" />
            <img 
            className='rest-logo'
            src={restLogo3}
            width={150}
            height={70} 
            alt="Logo" />
          </div>
          <div className='card-preview'>
            <img 
            className='rest-img'
            src={restImg4} 
            alt="Food" />
            <img 
            className='rest-logo'
            src={restLogo4}
            width={150}
            height={70} 
            alt="Logo" />
          </div>
        </div>
        <div className='arrow-container'>
            <div className='arrow'>
              <img src={arrLeft} alt="Arrow" />
            </div>
            <div className='arrow'>
              <img src={arrRight} alt="Arrow" />
            </div>
          </div>
      </section>
    </>
  )
}

export default Restaurants
