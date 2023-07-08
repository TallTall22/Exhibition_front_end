import { useEffect, useState } from 'react'
import style from './collectionsPage.module.scss'
import { getCollections } from '../../../api/collection'
import { Button, Card, Nav, Pagination } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deleteFavorite, postFavorite } from '../../../api/user'

function CollectionsPage(){
  const [collections,setCollections]=useState([])
  const [categories,setCategories]=useState([])
  const [categoryId,setCategoryId]=useState('')
  const [pagination,setPagination]=useState({})
  const [page,setPage]=useState(1)

  const handlePostFavorite=async(collectionId)=>{
    const authToken=localStorage.getItem('authToken')
    await postFavorite({collectionId:collectionId,authToken})
    window.location.href='/collections'
  }

    const handleDeleteFavorite=async(collectionId)=>{
    const authToken=localStorage.getItem('authToken')
    await deleteFavorite({collectionId:collectionId,authToken})
    window.location.href='/collections'
  }
 

  useEffect(()=>{
    const authToken=localStorage.getItem('authToken')
    const getCollectionsAsync=async()=>{
      const data=await getCollections({categoryId,page,authToken}) 
      const collections=data.data
      setCollections(collections)
    }
    const getCategoriesAsync=async()=>{
      const data=await getCollections({categoryId,page,authToken})
      const categories=data.categories
      setCategories(categories) 
    }
    const getPaginationAsync=async()=>{
      const data=await getCollections({categoryId,page,authToken})
      const pagination=data.pagination
      setPagination(pagination) 
    }
    
    getCollectionsAsync()
    getCategoriesAsync()
    getPaginationAsync()
  },[categoryId,page])

    if(!collections){
      return <div className="">loading ...</div> 
    }
  return (
    <div className="">
      <div className={style.checkboxWrapper}>
        <Nav className={style.nav}>
          <Nav.Item className={style.navItem}>
              <Nav.Link className={style.navLink}  onClick={()=>setCategoryId('')} >全部</Nav.Link>
          </Nav.Item>
        {
          categories.map(category=>               
                  <Nav.Item  className={style.navItem} key={category.id}>
                    <Nav.Link  onClick={()=>setCategoryId(category.id)} className={style.navLink} >{category.name}</Nav.Link>
                  </Nav.Item>             
            )
        }
        </Nav>
      </div>
      <div className={style.collectionWrapper}>
        {
          collections.map(collection=>
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
                  {collection.isFavorited?<Button onClick={()=>handleDeleteFavorite(collection.id)} variant='danger'>移除收藏</Button>:<Button onClick={()=>handlePostFavorite(collection.id)}>收藏</Button>
                  }
                </Card.Body>
              </Card>
            )
        }
      </div>
        <Pagination className={style.pagination}>
        <Pagination.First onClick={()=>setPage(1)}/>
        <Pagination.Prev onClick={()=>setPage(pagination.prev)}/>
        <Pagination.Item onClick={()=>setPage(1)}>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item onClick={()=>setPage(pagination.currentPage-2<1?1:pagination.currentPage-2)}>{pagination.currentPage===1||pagination.currentPage===2?'...':pagination.currentPage-2}</Pagination.Item>
        <Pagination.Item onClick={()=>setPage(pagination.currentPage-1<1?1:pagination.currentPage-1)}>{pagination.currentPage===1?'...':pagination.currentPage-1}</Pagination.Item>
        <Pagination.Item active>{pagination.currentPage}</Pagination.Item>
        <Pagination.Item onClick={()=>setPage(pagination.currentPage+1>pagination.totalPage?pagination.totalPage:pagination.currentPage+1)}>{pagination.currentPage===pagination.totalPage?'...':pagination.currentPage+1}</Pagination.Item>
        <Pagination.Item onClick={()=>setPage(pagination.currentPage+2>pagination.totalPage?pagination.totalPage:pagination.currentPage+2)}>{pagination.currentPage===pagination.totalPage||pagination.currentPage===pagination.totalPage-1?'...':pagination.currentPage+2}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item onClick={()=>setPage(pagination.totalPage)}>{pagination.totalPage}</Pagination.Item>
        <Pagination.Next  onClick={()=>setPage(pagination.next)}/>
        <Pagination.Last onClick={()=>setPage(pagination.totalPage)}/>
        </Pagination>      
    </div>
  )
}

export default CollectionsPage