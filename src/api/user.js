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
