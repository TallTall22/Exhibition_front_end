import axios from "axios";

const baseUrl='http://localhost:3001/api/admin'

export const adminGetUsers=async ()=>{
  try{
    const res=await axios.get(baseUrl+'/users')
    const data=await res.data.users
    return data
  }catch(err){
    console.error(err)
  }
}

export const adminPatchUsers=async (payload)=>{
  try{
    const {id,isAdmin} =payload
    const res=await axios.patch(baseUrl+`/users/${id}`,{isAdmin})
    const data=await res.data.user
    return data
  }catch(err){
    console.error(err)
  }
}

export const adminGetCollections=async ()=>{
  try{
    const res=await axios.get(baseUrl+'/collections')
    const data=await res.data.collections
    return data
  }catch(err){
    console.error(err)
  }
}

export const adminCreateCollections=async ()=>{
  try{
    const res=await axios.get(baseUrl+'/collections/create')
    const data=await res.data
    return data
  }catch(err){
    console.error(err)
  }
}

export const adminPostCollection=async ({name, slogan, artMaker, description, artRemark, exhibitionId,categoryId,image})=>{
  try{
    const res=await axios.post(baseUrl+'/collections',
    {name, slogan, artMaker, description, artRemark, exhibitionId,categoryId,image},{
      headers:{"Content-Type":'multipart/form-data'}
    })
    const data=await res.data
    return data
  }catch(err){
    console.error(err)
  }
}

export const adminGetCollection=async (payload)=>{
  try{
    const {id}=payload
    const res=await axios.get(baseUrl+`/collections/${id}`)
    const data=await res.data
    return data
  }catch(err){
    console.error(err)
  }
}

export const adminEditCollection=async (payload)=>{
  try{
    const {id}=payload
    const res=await axios.get(baseUrl+`/collections/${id}/edit`)
    const data=await res.data
    return data
  }catch(err){
    console.error(err)
  }
}

export const adminPutCollection=async (payload)=>{
  try{
    const {id,name, slogan, artMaker, description, artRemark, exhibitionId,categoryId,image}=payload
    const res=await axios.put(baseUrl+`/collections/${id}`,{name, slogan, artMaker, description, artRemark, exhibitionId,categoryId,image},{
      headers:{"Content-Type":'multipart/form-data'}
    })
    const data=await res.data
    return data
  }catch(err){
    console.error(err)
  }
}

export const adminDeleteCollection=async (payload)=>{
  try{
    const {id}=payload
    const res=await axios.delete(baseUrl+`/collections/${id}`)
    const data=await res.data
    return data
  }catch(err){
    console.error(err)
  }
}

export const adminGetExhibitions=async ()=>{
  try{
    const res=await axios.get(baseUrl+'/exhibitions')
    const data=await res.data.exhibitions
    return data
  }catch(err){
    console.error(err)
  }
}

export const adminPostExhibition=async (payload)=>{
  try{
    const {name, startDate, endDate, description, openTime,location,fare,image}=payload
    const res=await axios.post(baseUrl+'/exhibitions',
    {name, startDate, endDate, description, openTime,location,fare,image},{
      headers:{"Content-Type":'multipart/form-data'}
    })
    const data=await res.data
    return data
  }catch(err){
    console.error(err)
  }
}

export const adminGetExhibition=async (payload)=>{
  try{
    const {id}=payload
    const res=await axios.get(baseUrl+`/exhibitions/${id}`)
    const data=await res.data
    return data
  }catch(err){
    console.error(err)
  }
}

export const adminEditExhibition=async (payload)=>{
  try{
    const {id}=payload
    const res=await axios.get(baseUrl+`/exhibitions/${id}/edit`)
    const data=await res.data
    return data
  }catch(err){
    console.error(err)
  }
}

export const adminPutExhibition=async (payload)=>{
  try{
    const {id,name, startDate, endDate, description, openTime,location,fare,image}=payload
    const res=await axios.put(baseUrl+`/exhibitions/${id}`,{name, startDate, endDate, description, openTime,location,fare,image},{
      headers:{"Content-Type":'multipart/form-data'}
    })
    const data=await res.data
    return data
  }catch(err){
    console.error(err)
  }
}

export const adminDeleteExhibition=async (payload)=>{
  try{
    const {id}=payload
    const res=await axios.delete(baseUrl+`/exhibitions/${id}`)
    const data=await res.data
    return data
  }catch(err){
    console.error(err)
  }
}

export const adminGetVideos=async ()=>{
  try{
    const res=await axios.get(baseUrl+'/videos')
    const data=await res.data.videos
    return data
  }catch(err){
    console.error(err)
  }
}



 