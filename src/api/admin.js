import axios from "axios";

const baseUrl='http://localhost:3001/api/admin'

export const adminGetUsers=async (authToken)=>{
  try{
    const res=await axios.get(baseUrl+'/users',{
      headers:{
        Authorization:'Bearer '+authToken
      }
    })
    const data=await res.data.users
    return data
  }catch(err){
    console.error(err)
  }
}

export const adminPatchUsers=async (payload)=>{
  try{
    const {id,isAdmin,authToken} =payload
    const res=await axios.patch(baseUrl+`/users/${id}`,{isAdmin},{
      headers:{
        Authorization:'Bearer '+authToken
      }
    })
    const data=await res.data.user
    return data
  }catch(err){
    console.error(err)
  }
}

export const adminGetCollections=async (authToken)=>{
  try{
    const res=await axios.get(baseUrl+'/collections',{
      headers:{
        Authorization:'Bearer '+authToken
      }
    })
    const data=await res.data.collections
    return data
  }catch(err){
    console.error(err)
  }
}

export const adminCreateCollections=async (authToken)=>{
  try{
    const res=await axios.get(baseUrl+'/collections/create',{
      headers:{
        Authorization:'Bearer '+authToken
      }
    })
    const data=await res.data
    return data
  }catch(err){
    console.error(err)
  }
}

export const adminPostCollection=async ({name, slogan, artMaker, description, artRemark, exhibitionId,categoryId,image,authToken})=>{
  try{
    const res=await axios.post(baseUrl+'/collections',
    {name, slogan, artMaker, description, artRemark, exhibitionId,categoryId,image},{
      headers:{"Content-Type":'multipart/form-data',
      Authorization:'Bearer '+authToken
    }
    })
    const data=await res.data
    return data
  }catch(err){
    console.error(err)
  }
}

export const adminGetCollection=async (payload)=>{
  try{
    const {id,authToken}=payload
    const res=await axios.get(baseUrl+`/collections/${id}`,{
      headers:{
        Authorization:'Bearer '+authToken
      }
    })
    const data=await res.data
    return data
  }catch(err){
    console.error(err)
  }
}

export const adminEditCollection=async (payload)=>{
  try{
    const {id,authToken}=payload
    const res=await axios.get(baseUrl+`/collections/${id}/edit`,{
      headers:{
        Authorization:'Bearer '+authToken
      }
    })
    const data=await res.data
    return data
  }catch(err){
    console.error(err)
  }
}

export const adminPutCollection=async (payload)=>{
  try{
    const {id,name, slogan, artMaker, description, artRemark, exhibitionId,categoryId,image,authToken}=payload
    const res=await axios.put(baseUrl+`/collections/${id}`,{name, slogan, artMaker, description, artRemark, exhibitionId,categoryId,image},{
      headers:
      {
        "Content-Type":'multipart/form-data',
        Authorization:'Bearer '+authToken
    }
    })
    const data=await res.data
    return data
  }catch(err){
    console.error(err)
  }
}

export const adminDeleteCollection=async (payload)=>{
  try{
    const {id,authToken}=payload
    const res=await axios.delete(baseUrl+`/collections/${id}`,{
      headers:{
        Authorization:'Bearer '+authToken
      }
    })
    const data=await res.data
    return data
  }catch(err){
    console.error(err)
  }
}

export const adminGetExhibitions=async (authToken)=>{
  try{
    const res=await axios.get(baseUrl+'/exhibitions',{
      headers:{
        Authorization:'Bearer '+authToken
      }
    })
    const data=await res.data.exhibitions
    return data
  }catch(err){
    console.error(err)
  }
}

export const adminPostExhibition=async (payload)=>{
  try{
    const {name, startDate, endDate, description, openTime,location,fare,image,authToken}=payload
    const res=await axios.post(baseUrl+'/exhibitions',
    {name, startDate, endDate, description, openTime,location,fare,image},{
      headers:
      {
        "Content-Type":'multipart/form-data',
        Authorization:'Bearer '+authToken
    }
    })
    const data=await res.data
    return data
  }catch(err){
    console.error(err)
  }
}

export const adminGetExhibition=async (payload)=>{
  try{
    const {id,authToken}=payload
    const res=await axios.get(baseUrl+`/exhibitions/${id}`,{
      headers:{
        Authorization:'Bearer '+authToken
      }
    })
    const data=await res.data
    return data
  }catch(err){
    console.error(err)
  }
}

export const adminEditExhibition=async (payload)=>{
  try{
    const {id,authToken}=payload
    const res=await axios.get(baseUrl+`/exhibitions/${id}/edit`,{
      headers:{
        Authorization:'Bearer '+authToken
      }
    })
    const data=await res.data
    return data
  }catch(err){
    console.error(err)
  }
}

export const adminPutExhibition=async (payload)=>{
  try{
    const {id,name, startDate, endDate, description, openTime,location,fare,image,authToken}=payload
    const res=await axios.put(baseUrl+`/exhibitions/${id}`,{name, startDate, endDate, description, openTime,location,fare,image},{
      headers:{
        "Content-Type":'multipart/form-data',
        Authorization:'Bearer '+authToken
    }
      

    })
    const data=await res.data
    return data
  }catch(err){
    console.error(err)
  }
}

export const adminDeleteExhibition=async (payload)=>{
  try{
    const {id,authToken}=payload
    const res=await axios.delete(baseUrl+`/exhibitions/${id}`,{
      headers:{
        Authorization:'Bearer '+authToken
      }
    })
    const data=await res.data
    return data
  }catch(err){
    console.error(err)
  }
}

export const adminGetVideos=async (authToken)=>{
  try{
    const res=await axios.get(baseUrl+'/videos',{
      headers:{
        Authorization:'Bearer '+authToken
      }
    })
    const data=await res.data.videos
    return data
  }catch(err){
    console.error(err)
  }
}



 