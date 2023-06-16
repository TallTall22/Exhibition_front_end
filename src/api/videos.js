import axios from 'axios'
const baseUrl='http://localhost:3001/api'

export const getVideos=async()=>{
  try{
    const res=await axios.get(baseUrl+'/videos')
    return res.data
  }catch(err){
    console.error(err)
  }
}