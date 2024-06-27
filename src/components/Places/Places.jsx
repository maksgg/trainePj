import './Places.css'

const Places = () => {
  return (
    <section className='places'>
      <div className='circle-container'>
        <div className='circle'>
          <div className='colorfulCircle'>
            <p className='circleNumber'>1</p>
          </div>
          <p className='circle-text'>kitchen</p>
        </div>
        <div className='circle'>
          <div className='colorfulCircle'>
            <p className='circleNumber'>11</p>
          </div>
          <p className='circle-text'>specialties</p>
        </div>
        <div className='circle'>
          <div className='colorfulCircle'>
            <p className='circleNumber'>11</p>
          </div>
          <p className='circle-text'>restaurants</p>
        </div>
        <div className='circle'>
          <div className='colorfulCircle'>
            <p className='circleNumber'>1</p>
          </div>
          <p className='circle-text'>transport costs</p>
        </div>
      </div>
    </section>
  )
}

export default Places
