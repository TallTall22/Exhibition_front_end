import {Nav, Navbar} from 'react-bootstrap'
import style from './header.module.scss'
function  Header(){
  return (
    <header className={style.header}>
      <Navbar className={style.navbar}>
          <h1 className={style.navbarBrand}><a href='/'>文物展覽網</a></h1>
          <input type='checkbox' className={style.navbarToggle} id='navbar-toggle'/>
        <Nav className={style.nav} as='ul'>
          <Nav.Item className={style.navItem} as='li'>     
              <Nav.Link className={style.navLink}>展覽</Nav.Link>
          </Nav.Item>
          <Nav.Item className={style.navItem} as='li'>    
              <Nav.Link className={style.navLink}>影片專區</Nav.Link>
          </Nav.Item>
          <Nav.Item className={style.navItem} as='li'>    
              <Nav.Link className={style.navLink}>會員專區</Nav.Link>
          </Nav.Item>
        </Nav>
        <label for='navbar-toggle' className={style.navbarToggleLabel}>
          <span className={style.hamberger}></span>
        </label>
      </Navbar>
    </header>
  )
}

export default Header