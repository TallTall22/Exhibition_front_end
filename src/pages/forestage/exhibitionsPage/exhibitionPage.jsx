import { useEffect, useState } from "react"
import { getExhibition } from "../../../api/exhibition"
import { Card, Figure, Nav } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import style from './exhibitionPage.module.scss'

function ExhibitionPage(){
  const [exhibition,setExhibition]=useState([])
  const [collections,setCollecions]=useState([])
  const params=useParams()
  const {id}=params
  useEffect(()=>{
    const getExhibtionAsync=async()=>{
      const data=await getExhibition(id)
      const exhibition=data.exhibition
      setExhibition(exhibition)
    }
    const getCollectionsAsync=async()=>{
      const data=await getExhibition(id)
      const collections=data.collections
      setCollecions(collections)
    }
    getExhibtionAsync()
    getCollectionsAsync()
  },[id])
  return(
    <div className={style.exhibitionWrapper}>
      <Figure>
        <Figure.Image
        className={style.image}
        src={exhibition.image}
        alt={exhibition.name}
        />
      </Figure>
      <div className={style.info}>
        <h2>{exhibition.name}</h2>
        <div className={style.time}>
          <h4>{exhibition.startDate} — {exhibition.endDate}</h4>
          <h5>{exhibition.openTime} — {exhibition.endTime}</h5>
        </div>
      </div>
      <Nav className={style.nav}>
        <Nav.Item className={style.item}>
          <Nav.Link className={style.link} href="#description">展覽介紹</Nav.Link>
        </Nav.Item>
        <Nav.Item className={style.item}>
          <Nav.Link className={style.link} href="#collections">代表作品</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className={style.description} id="description">
        <h3>展覽介紹</h3>
        <p>{exhibition.description}</p>
      </div>
      <div className={style.collections} id="collections">
        <h3>代表作品</h3>
        <div className={style.collectionSection}>
          {
            collections.map(collection=>
              <Card className={style.card}>
                <Link to={`/collections/${collection.id}`}>
                  <Card.Img variant="top" src={collection.image} />
                </Link>
              <Card.Body>
                <Card.Title>{collection.name}</Card.Title>
                <Card.Text>
                  {collection.description.substring(0,40)}...
                </Card.Text>
              </Card.Body>
            </Card>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default ExhibitionPage