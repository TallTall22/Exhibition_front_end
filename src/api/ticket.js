import axios from 'axios'
const baseUrl='http://localhost:3001/api'

export const getTicketExhibitions=async()=>{
  try{
    const res=await axios.get(baseUrl+'/tickets/all')
  return res.data
  }catch(err){
    console.error(err)
  }
}

export const getTicketExhibition=async(id)=>{
  try{
    const res=await axios.get(baseUrl+`/tickets/${id}`)
  return res.data
  }catch(err){
    console.error(err)
  }
}