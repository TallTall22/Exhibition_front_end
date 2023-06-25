import { useEffect, useState } from "react"
import { Button, Col, Figure, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import {  adminGetExhibition } from "../../api/admin"

function ExhibitionGetPage(){
  const params=useParams()
  const {id}=params
  const [exhibition,setExhibition]=useState({})

  useEffect(()=>{
     const authToken=localStorage.getItem('authToken')
    const getExhibitionAsync=async()=>{
      const data=await adminGetExhibition({id,authToken})
      const exhibition=data.exhibition
      console.log(data)
      setExhibition(exhibition)
    }
    getExhibitionAsync()
  },[id])


  return(
    <>
    <Col sm={12} className="mb-3">
      <h1>{exhibition.name}</h1>
    </Col>
    <Row className="mb-3">
      <Col sm={4}>
      <Figure className="d-flex justify-content-center">
      <Figure.Image
        width={1000}
        src={exhibition.image}
        alt={exhibition.name}
      />
    </Figure>
    </Col>
    <Col sm={8}>
      <ul>
        <li>Start Date:{exhibition.startDate}</li>
        <li>End Date:{exhibition.endDate}</li>
        <li>Fare:{exhibition.fare}</li>
        <li>Open Time:{exhibition.openTime}</li>
        <li className="mb-2">Location:{exhibition.location}</li>
        <li>{exhibition.description}</li>
      </ul>
      <div className="d-flex justify-content-end">
      <Button variant="outline-secondary" onClick={()=>window.history.back()}>Back</Button>
      </div>
    </Col>
    </Row>
    
    </>
    
  )
}

export default ExhibitionGetPage