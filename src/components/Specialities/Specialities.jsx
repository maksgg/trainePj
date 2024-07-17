import './Specialities.css';
import s1 from '../../assets/img/s1.svg';
import s2 from '../../assets/img/s2.svg';
import s3 from '../../assets/img/s3.svg';
import s4 from '../../assets/img/s4.svg';
import s5 from '../../assets/img/s5.svg';
import s6 from '../../assets/img/s6.svg';
import s7 from '../../assets/img/s7.svg';
import s8 from '../../assets/img/s8.svg';
import arrLeft from '../../assets/img/arr-left.svg';
import arrRight from '../../assets/img/arr-right.svg';

const Specialities = () => {
  return (
    <section className='specialities'>
      <div className='rest_container1'>
          <h2 className='h2'>Specialities</h2>
          <div className='rest-btn'>
            show all
          </div>
        </div>
        <div className='rest_container22'>
          <div className='arrow3'>
            <img src={arrLeft} alt="Arrow" />
          </div>
          <div className='card-preview1'>
            <img 
            className='rest-img1'
            src={s1} 
            alt="Food" />
            <p className='specialities-text'>Bagel</p>
          </div>
          <div className='card-preview1 s25'>
            <img 
            className='rest-img1'
            src={s2} 
            alt="Food" />
            <p className='specialities-text'>Burger</p>
          </div>
          <div className='card-preview1 s24'>
            <img 
            className='rest-img1'
            src={s3} 
            alt="Food" />
            <p className='specialities-text'>Chicken</p>
          </div>
          <div className='card-preview1 s24'>
            <img 
            className='rest-img1'
            src={s4} 
            alt="Food" />
            <p className='specialities-text'>Fish</p>
          </div>
          <div className='card-preview1 s23'>
            <img 
            className='rest-img1'
            src={s5} 
            alt="Food" />
            <p className='specialities-text'>Fish`Chips</p>
          </div>
          <div className='card-preview1 s23'>
            <img 
            className='rest-img1'
            src={s6} 
            alt="Food" />
            <p className='specialities-text'>Salads</p>
          </div>
          <div className='card-preview1 s22'>
            <img 
            className='rest-img1'
            src={s7} 
            alt="Food" />
            <p className='specialities-text'>Pizza</p>
          </div>
          <div className='card-preview1 s22'>
            <img 
            className='rest-img1'
            src={s8} 
            alt="Food" />
            <p className='specialities-text'>Pasta</p>
          </div>
          <div className='arrow3'>
            <img src={arrRight} alt="Arrow" />
          </div>
        </div>
    </section>
  )
}

export default Specialities;
