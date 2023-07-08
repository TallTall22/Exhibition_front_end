import { Link, useNavigate } from 'react-router-dom';
import style from './memberPage.module.scss'
import { useAuth } from '../../../context/userContext';
import { useEffect } from 'react';

function MemberPage(){
    const {logout}=useAuth()
    const navigate=useNavigate()

  const handleLogout=()=>{
     logout()
  }
  useEffect(()=>{
    const authToken=localStorage.getItem('authToken')
    if(!authToken){
      navigate('/signin')
    }
  },[navigate])
  return (
    <>
    <div className={style.connection}>
      <a href="/signin" onClick={handleLogout}>登出</a>
    </div>
      <div className={style.sectionWrapper}>
          <div className={style.section}>
            <Link to='/tickets' className={style.link}>
              <div className="">
                  <h5 className={style.text}>購票</h5>
              </div>
            </Link>
          </div>
          <div className={style.section}>
            <Link to='/collections' className={style.link}>
              <div className="">
                <h5 className={style.text}>文物專區</h5>
              </div>
            </Link>
          </div>
          <div className={style.section}>
            <Link to='/favorites' className={style.link}>
              <div className="">
                  <h5 className={style.text}>收藏清單</h5>
              </div>
            </Link>
          </div>
      </div>
      </>
  )
}

export default MemberPage

