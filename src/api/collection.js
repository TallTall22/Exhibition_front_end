import axios from 'axios'
const baseUrl='http://localhost:3001/api'

export const getCollections=async(payload)=>{
  try{
    const {categoryId,page,authToken}=payload
    const res=await axios.get(baseUrl+'/collections',{
      headers:{
        Authorization:'Bearer '+authToken
      },
      params:{
        categoryId:categoryId,
        page:page
      }
    })
    return res.data
  }catch(err){
    console.error(err)
  }
}

export const getCollection=async(payload)=>{
  try{
    const {id,authToken}=payload
    const res=await axios.get(baseUrl+`/collections/${id}`,{
      headers:{
        Authorization:'Bearer '+authToken
      }
    })
    return res.data
  }catch(err){
    console.error(err)
  }
}