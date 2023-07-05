import { useEffect, useState } from 'react';
import { getExhibitions } from '../../../api/exhibition';
import { Figure } from 'react-bootstrap';
import style from './exhibitionsPage.module.scss'
import { Link } from 'react-router-dom';


function ExhibitionsPage(){
  const [exhibitions,setExhibitions]=useState([])
  useEffect(()=>{
    const getExhibitionsAsync=async()=>{
      const data =await getExhibitions()
      const exhibitions=data.exhibitions.filter(exhibition=>exhibition.name!=='未出展')
      setExhibitions(exhibitions)
    }
    getExhibitionsAsync()
  })
  return (
    <div className={style.exhibitionSection}>
      <h1 className='mb-3'>文物展覽</h1>
       {
          exhibitions.map(exhibition=>
            <div key={exhibition.id} className={style.exhibitionWrapper}>
              <Link to={`/exhibitions/${exhibition.id}`}>
              <Figure className={style.figure}>
                <Figure.Image
                  className={style.image}
                  src={exhibition.image}
                  alt={exhibition.name}
                />
              </Figure>
              <div className={style.info}>
                <h4 className={style.date}>{exhibition.startDate} — {exhibition.endDate}</h4>
                <h3 className={style.name}>{exhibition.name}</h3>
              </div>
              </Link>             
            </div>
            )
        }
    </div>
  )
}

export default ExhibitionsPage