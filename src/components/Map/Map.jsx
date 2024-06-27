import './Map.css'
import map from '../../assets/img/Map.png'

const Map = () => {
  return (
    <section className='map'>
      <div> {/* Підключити live map */}
        <img src={map} alt="" />
      </div>
    </section>
  )
}

export default Map
