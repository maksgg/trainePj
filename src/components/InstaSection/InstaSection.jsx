import './InstaSection.css';
import inst1 from '../../assets/img/inst1.png';
import inst2 from '../../assets/img/inst2.png';
import inst3 from '../../assets/img/inst3.png';
import inst4 from '../../assets/img/inst4.png';

const InstaSection = () => {
  return (
    <section className='restaurants'>
        <div className='rest_container1'>
          <h2 className='h2'>#YellowKitchens <span className='insta-span'>in instagram</span></h2>
        </div>
        <div className='rest_container2'>
          <div className='card-preview'>
            <img 
            className='rest-img'
            src={inst1} 
            alt="Food" />
            
          </div>
          <div className='card-preview'>
            <img 
            className='rest-img'
            src={inst2} 
            alt="Food" />
            
          </div>
          <div className='card-preview'>
            <img 
            className='rest-img'
            src={inst3} 
            alt="Food" />
           
          </div>
          <div className='card-preview'>
            <img 
            className='rest-img'
            src={inst4} 
            alt="Food" />
            
          </div>
        </div>
        
      </section>
  )
}

export default InstaSection
