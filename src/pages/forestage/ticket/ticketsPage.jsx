import { useEffect, useState } from "react"
import { Button, Card } from "react-bootstrap"
import { getTicketExhibitions } from "../../../api/ticket"
import style from './ticketsPage.module.scss'
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../../context/userContext"

function TicketsPage(){
  const [exhibitions,setExhibitions]=useState([])
  const navigate=useNavigate()
  const {logout}=useAuth()

  const handleLogout=()=>{
     logout()
  }

  useEffect(()=>{
    const getExhibitionsAsync=async()=>{
      const authToken=localStorage.getItem('authToken')
      if(!authToken) return navigate('/signin')
      const data=await getTicketExhibitions(authToken)
      const exhibitions=data.exhibitions.filter(e=>e.description!==null)
      setExhibitions(exhibitions)
    }
  
    getExhibitionsAsync()
  })
  return(
    <div className="">
      <div className={style.connection}>
        <Link className={style.link} to='/tickets/user'>購票明細</Link>/
        <a href="/signin" onClick={handleLogout}>登出</a>
      </div>
      <div className={style.exhibitionWrapper}>
      {
        exhibitions.map(exhibition=>
          <Card key={exhibition.id} className={style.card}>
            <Card.Img className={style.image} variant="top" src={exhibition.image} />
            <Card.Body>
              <Card.Title>{exhibition.name}</Card.Title>
              <Card.Text>
                {exhibition.startDate}—{exhibition.endDate}
              </Card.Text>
              <Button href={`/tickets/${exhibition.id}`} variant="primary">購票</Button>
            </Card.Body>
          </Card>
          )
      }
      
      </div>
    </div>
      
    
  )
}

export default TicketsPage