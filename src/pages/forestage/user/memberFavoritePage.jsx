import { useEffect, useState } from "react"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import style from './memberFavoritePage.module.scss'
import { getFavorite } from "../../../api/user"

function MemberFavoritePage(){
  const [favorites,setFavorites]=useState([])

  useEffect(()=>{
    const authToken=localStorage.getItem('authToken')
    const getFavoriteAsync=async()=>{
      const data=await getFavorite(authToken)
      const favorites=data.FavoritedCollection
      setFavorites(favorites)
    }
    getFavoriteAsync()
  })
  if(favorites===[]){
    return(
      <div className="">您還沒有收藏任何文物</div>
    )
  }
  return(
    <div className="">
      <div className={style.collectionWrapper}>
        {
          favorites.map(collection=>
                <Card key={collection.id} className={style.card}>
                  <Link to={`/collections/${collection.id}`}>
                {
                  <Card.Img
                    className={style.image}
                    variant="top"
                    src={collection.image}
                  />
                }
                </Link>
                <Card.Body className={style.cardBody}>
                  <Card.Title className={style.title}>{collection.name}</Card.Title>
                  <Card.Text className={style.text}>
                    {collection.description.substring(0,60)}...
                  </Card.Text>
                  <Button variant='danger'>移除收藏</Button>
                </Card.Body>
                
              </Card>
            )
        }
      </div>
    </div>
  )
}

export default MemberFavoritePage