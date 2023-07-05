import { useEffect, useState } from "react"
import { deleteUserTicket, getUserTicket, patchUserTicket } from "../../../api/ticket"
import { Button, Tab, Table, Tabs } from "react-bootstrap"

function UserTicketPage(){
  const [tickets,setTickets]=useState([])
  const unUsedTickets=tickets.filter(ticket=>!ticket.isUsed)
  const UsedTickets=tickets.filter(ticket=>ticket.isUsed)

  const handleDeleteTicket=async(id)=>{
    const authToken=localStorage.getItem('authToken')
    await deleteUserTicket({id,authToken})
  }

  const handleUseTicket=async(id)=>{
    const authToken=localStorage.getItem('authToken')
    await patchUserTicket({id,authToken})
  }

  useEffect(()=>{
    const getUnUsedTicketsAsync=async()=>{
      const authToken=localStorage.getItem('authToken')
      const data=await getUserTicket(authToken)
      const tickets=data.tickets
      setTickets(tickets)
    }

    getUnUsedTicketsAsync()

  })

  
  return(
    <div className="">
      <Tabs
      defaultActiveKey="unUsed"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="unUsed" title="未使用">
        <Table>
          <thead>
            <tr>
              <th>訂單編號</th>
              <th>訂購時間</th>
              <th>購買節目</th>
              <th>張數</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              unUsedTickets.map(ticket=>
                <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.createdAt}</td>
                <td>{ticket.Exhibition.name}</td>
                <td>{ticket.quantity}</td>
                <td><Button onClick={()=>handleUseTicket(ticket.id)}>使用</Button>{' '}<Button onClick={()=>handleDeleteTicket(ticket.id)}variant="danger">退票</Button></td>
              </tr>
          )
              
            }
          </tbody>
        
        </Table>
      </Tab>
      <Tab eventKey="Used" title="已使用">
        <Table>
          <thead>
            <tr>
              <th>訂單編號</th>
              <th>訂購時間</th>
              <th>購買節目</th>
              <th>張數</th>
            </tr>
          </thead>
          <tbody>
            {
              UsedTickets.map(ticket=>
                <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.createdAt}</td>
                <td>{ticket.Exhibition.name}</td>
                <td>{ticket.quantity}</td>
              </tr>
          )
              
            }
          </tbody>
        </Table>
      </Tab>
    </Tabs>
    </div>
  )
}

export default UserTicketPage