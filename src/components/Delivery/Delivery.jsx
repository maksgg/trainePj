import './Delivery.css'

const Delivery = () => {
  return (
    <section className='delivery-back'>
      <div className='delivery-title'>
        <h2 className='delivery-h2'>Your nearest restaurants</h2>
        <p className='delivery-text'>Each kitchen works with its own delivery area<br /> to deliver food to you as soon as possible</p>
      </div>
      <div className='delivery-address'>
        <input type='text' className='input' placeholder='Enter delivery address'></input>
        <div className='send-btn'>
          send
        </div>
      </div>
    </section>
  )
}

export default Delivery
