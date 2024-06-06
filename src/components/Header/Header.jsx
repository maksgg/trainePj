import logo from '../../assets/img/logo.png';
import person from '../../assets/img/person.png';
import cart from '../../assets/img/cart.png'
import './Header.css';

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='logo-container'>
          <img src={logo} alt="logo" />
        </div>
        <div className='menu'>
          <div className='menu-log_in'>
            <img src={person} alt="user" />
            <p className='header-text'>Log in</p>
          </div>
          <div className='menu-cart'>
            <img src={cart} alt="cart" />
            <p className='header-text'>0</p>
          </div>
          <div className='burger'>
              <span className='burger-line'></span>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
