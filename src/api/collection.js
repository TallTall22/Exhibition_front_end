import axios from 'axios'
const baseUrl='http://localhost:3001/api'

export const getCollections=async(payload)=>{
  try{
    const {categoryId,page}=payload
    const res=await axios.get(baseUrl+'/collections',{
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
    const {id}=payload
    const res=await axios.get(baseUrl+`/collections/${id}`)
    return res.data
  }catch(err){
    console.error(err)
  }
}