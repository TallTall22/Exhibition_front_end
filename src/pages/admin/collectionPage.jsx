import { useEffect, useState } from "react"
import { Button, Col, Figure, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { adminGetCollection } from "../../api/admin"

function CollectionGetPage(){
  const params=useParams()
  const {id}=params
  const [collection,setCollection]=useState({})

  useEffect(()=>{
    const getCollectionAsync=async()=>{
      const data=await adminGetCollection({id})
      const collection=data.collection
      console.log(data)
      setCollection(collection)
    }
    getCollectionAsync()
  },[id])

     if (  !collection || !collection.Exhibition) {
    return <div>Loading...</div>; // 数据还未加载完成，显示加载中的状态
  }

  return(
    <>
    <Col sm={12} className="mb-3">
      <h1>{collection.name}</h1>
      <h5>{collection.category}</h5>
    </Col>
    <Row className="mb-3">
      <Col sm={4}>
      <Figure className="d-flex justify-content-center">
      <Figure.Image
        width={200}
        src={collection.image}
        alt={collection.name}
      />
    </Figure>
    </Col>
    <Col sm={8}>
      <ul>
        <li>{collection.artRemark}</li>
        <li>{collection.slogan}</li>
        <li>{collection.artMaker}</li>
        <li className="mb-2">{collection.Exhibition.name}</li>
        <li>{collection.description}</li>
      </ul>
      <div className="d-flex justify-content-end">
      <Button variant="outline-secondary" onClick={()=>window.history.back()}>Back</Button>
      </div>
    </Col>
    </Row>
    
    </>
    
  )
}

export default CollectionGetPage