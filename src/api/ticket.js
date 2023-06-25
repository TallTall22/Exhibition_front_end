import axios from 'axios'
const baseUrl='http://localhost:3001/api'

export const getTicketExhibitions=async(authToken)=>{
  try{
    const res=await axios.get(baseUrl+'/tickets/all',{
      headers:{
        Authorization:'Bearer '+authToken
      }
    })
  return res.data
  }catch(err){
    console.error(err)
  }
}

export const getTicketExhibition=async(payload)=>{
  try{
    const {id,authToken}=payload
    const res=await axios.get(baseUrl+`/tickets/${id}`,{
      headers:{
        Authorization:'Bearer '+authToken
      }
    })
  return res.data
  }catch(err){
    console.error(err)
  }
}

export const postTicket=async(payload)=>{
  try{
    const {id,authToken,quantity}=payload
    const res=await axios.post(baseUrl+`/tickets/${id}`,{quantity},{
      headers:{
        Authorization:'Bearer '+ authToken
      }
    })
  return res.data
  }catch(err){
    console.error(err)
  }
}

export const getUserTicket=async(authToken)=>{
  try{
    const res=await axios.get(baseUrl+'/tickets',{
      headers:{
        Authorization:'Bearer '+authToken
      }
    })
  return res.data
  }catch(err){
    console.error(err)
  }
}

export const patchUserTicket=async(payload)=>{
  try{
    const {id,isUsed,authToken}=payload
    const res=await axios.patch(baseUrl+`/tickets/${id}`,{isUsed},{
      headers:{
        Authorization:'Bearer '+authToken
      }
    })
  return res.data
  }catch(err){
    console.error(err)
  }
}

export const deleteUserTicket=async(payload)=>{
  try{
    const {id,authToken}=payload
    const res=await axios.delete(baseUrl+`/tickets/${id}`,{
      headers:{
        Authorization:'Bearer '+authToken
      }
    })
  return res.data
  }catch(err){
    console.error(err)
  }
}