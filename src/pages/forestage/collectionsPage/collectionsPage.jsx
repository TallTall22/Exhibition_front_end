import { useEffect, useState } from 'react'
import style from './collectionsPage.module.scss'
import { getCollections } from '../../../api/collection'
import { Card, Nav, Pagination } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CollectionsPage(){
  const [collections,setCollections]=useState([])
  const [categories,setCategories]=useState([])
  const [categoryId,setCategoryId]=useState('')
  const [pagination,setPagination]=useState({})
  const [page,setPage]=useState(1)

  useEffect(()=>{
    const getCollectionsAsync=async()=>{
      const data=await getCollections({categoryId,page}) 
      const collections=data.collections.rows
      setCollections(collections)
    }
    const getCategoriesAsync=async()=>{
      const data=await getCollections({categoryId,page})
      const categories=data.categories
      setCategories(categories) 
    }
    const getPaginationAsync=async()=>{
      const data=await getCollections({categoryId,page})
      const pagination=data.pagination
      setPagination(pagination) 
    }
    getCollectionsAsync()
    getCategoriesAsync()
    getPaginationAsync()
  },[categoryId,page])
  return (
    <div className="">
      <div className={style.checkboxWrapper}>
        <Nav className={style.nav}>
          <Nav.Item>
              <Nav.Link  onClick={()=>setCategoryId('')} >全部</Nav.Link>
          </Nav.Item>
        {
          categories.map(category=>               
                  <Nav.Item  className={style.navItem} key={category.id}>
                    <Nav.Link  onClick={()=>setCategoryId(category.id)} >{category.name}</Nav.Link>
                  </Nav.Item>             
            )
        }
        </Nav>
      </div>
      <div className={style.collectionWrapper}>
        {
          collections.map(collection=>
                <Card className={style.card}>
                  <Link to={`/member/collections/${collection.id}`}>
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