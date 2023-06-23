import { useEffect, useState } from "react"
import { Button, Card } from "react-bootstrap"
import { getTicketExhibitions } from "../../../api/ticket"
import style from './ticketsPage.module.scss'

function TicketsPage(){
  const [exhibitions,setExhibitions]=useState([])

  useEffect(()=>{
    const getExhibitionsAsync=async()=>{
      const data=await getTicketExhibitions()
      const exhibitions=data.exhibitions.filter(e=>e.description!==null)
      setExhibitions(exhibitions)
    }
    getExhibitionsAsync()
  })
  return(
    <div className={style.exhibitionWrapper}>
      {
        exhibitions.map(exhibition=>
          <Card className={style.card}>
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
  )
}

export default TicketsPage