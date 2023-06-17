import axios from 'axios'
const baseUrl='http://localhost:3001/api'

export const getRecentExhibitions=async()=>{
  try{
    const res=await axios.get(baseUrl+'/exhibitions/recent')
    return res.data
  }catch(err){
    console.error(err)
  }
}

export const getExhibitions=async()=>{
  try{
    const res=await axios.get(baseUrl+'/exhibitions')
    return res.data
  }catch(err){
    console.error(err)
  }
}