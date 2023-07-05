import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Figure } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { getRecentExhibitions } from '../../../api/exhibition';
import style from './homePage.module.scss'
import memberPicture from '../../../picture/member.png'
import videoPicture from '../../../picture/video.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function HomePage(){
  const [exhibitions,setExhibitions]=useState([])

  useEffect(()=>{
    const getExhibitionsAsync=async()=>{
      const data=await getRecentExhibitions()
      const exhibitions=data.exhibitions
      setExhibitions(exhibitions)
    }
    getExhibitionsAsync()
  })

  return (
    <>
    <section className='pb-5'>
      <div className={style.bannerWrapper}>
        <div className={style.swiperWrapper}>
          <Swiper
            modules={[Navigation,Pagination,A11y]}
            spaceBetween='100%'
            slidesPerView={1}
            navigation
            pagination={{clickable:true}}
          >
            {
              exhibitions.map(exhibition=>
                <SwiperSlide key={exhibition.id} className={style.swiperSlide}>
                  <Link to={`/exhibitions/${exhibition.id}`} className={style.link}>
                    <h2 className={style.text}>{exhibition.name}</h2>
                    <Figure className={style.figure}>
                      <Figure.Image className={style.image}
                        src={exhibition.image}
                        alt={exhibition.name}
                      />
                    </Figure>
                  </Link>
                </SwiperSlide>
              )
            }
          </Swiper>
        </div>
          <div className={style.videoWrapper}>
            <Link to='/videos' className={style.link}>
            <h2 className={style.text}>影音專區</h2>
            <Figure className={style.figure}>
               <Figure.Image className={style.image}
                 src={videoPicture}
                 alt='member'
                 />
                </Figure>
            </Link>
          </div>
          <div className={style.memberWrapper}>
            <Link to='/tickets' className={style.link}>
            <h2 className={style.text}>會員專區</h2>
            <Figure className={style.figure}>
               <Figure.Image className={style.image}
                 src={memberPicture}
                 alt='tickets'
                 />
                </Figure>
            </Link>
          </div>
         </div>
      </section>
      </>
  )
}

export default HomePage

