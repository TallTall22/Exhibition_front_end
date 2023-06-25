import {Nav, Navbar} from 'react-bootstrap'
import style from './header.module.scss'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { checkUser } from '../../api/user'



function  Header(){
  const [user,setUser]=useState([])


  function Admin(){
    if(user.isAdmin){
      return(
         <Nav.Item className={style.navItem} as='li'>     
            <Nav.Link as={NavLink} to='/admin/data' className={style.navLink}>後台</Nav.Link>
         </Nav.Item>
      )
    }
  }

  
  useEffect(()=>{
    const getUserAsync=async()=>{
      const authToken=localStorage.getItem('authToken')
      if(!authToken) return setUser('')
      const data=await checkUser(authToken)
      const user=data.user
      setUser(user)
    }
    getUserAsync()
  },[])
  return (
    <header className={style.header}>
      <Navbar className={style.navbar}>
          <h1 className={style.navbarBrand}><a href='/'>文物展覽網</a></h1>
          <input type='checkbox' className={style.navbarToggle} id='navbar-toggle'/>
        <Nav className={style.nav} as='ul'>
          <Admin/>
          <Nav.Item className={style.navItem} as='li'>     
              <Nav.Link as={NavLink} to='/exhibitions' className={style.navLink}>展覽</Nav.Link>
          </Nav.Item>
          <Nav.Item className={style.navItem} as='li'>     
              <Nav.Link as={NavLink} to='/collections' className={style.navLink}>文物資料</Nav.Link>
          </Nav.Item>
          <Nav.Item className={style.navItem} as='li'>    
              <Nav.Link as={NavLink} to='/videos' className={style.navLink}>影片專區</Nav.Link>
          </Nav.Item>
          <Nav.Item className={style.navItem} as='li'>    
              <Nav.Link as={NavLink} to='/tickets' className={style.navLink}>會員專區</Nav.Link>
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