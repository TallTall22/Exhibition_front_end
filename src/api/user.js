import axios from 'axios'
const baseUrl='http://localhost:3001/api'

export const signUp =async(payload)=>{
  try{
    const {name,email,password,confirmPassword}=payload
    const res=await axios.post(baseUrl+'/users/signup',{name,email,password,confirmPassword})
    return res.data
  }catch(err){
    console.error(err)
  }
}

export const signIn =async(payload)=>{
  try{
    const {email,password}=payload
    const res=await axios.post(baseUrl+'/users/signin',{email,password})
    return res.data
  }catch(err){
    console.error(err)
  }
}

export const checkUser =async(authToken)=>{
  try{
    const res=await axios.get(baseUrl+'/users/check',{
      headers:{
        Authorization:'Bearer '+ authToken
      }
    })
    return res.data
  }catch(err){
    console.error(err)
  }
}

export const getFavorite =async(authToken)=>{
  try{
    const res=await axios.get(baseUrl+'/users/favorites',{
      headers:{
        Authorization:'Bearer '+ authToken
      }
    })
    return res.data
  }catch(err){
    console.error(err)
  }
}

export const postFavorite =async(payload)=>{
  try{
    const {collectionId,authToken}=payload
    const res=await axios.post(baseUrl+'/users/favorites',{collectionId},{
      headers:{
        Authorization:'Bearer '+ authToken
      }
    })
    return res.data
  }catch(err){
    console.error(err)
  }
}

export const deleteFavorite =async(payload)=>{
  try{
    const {collectionId,authToken}=payload
    const res=await axios.delete(baseUrl+`/users/favorites/${collectionId}`,{
      headers:{
        Authorization:'Bearer '+ authToken
      }
    })
    return res.data
  }catch(err){
    console.error(err)
  }
}