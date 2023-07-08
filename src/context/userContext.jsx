import { useContext, useState } from "react"
import { createContext } from "react"
import { signIn, signUp } from "../api/user"

const defalutAuthContext={
  isAuthenticated:false,
  isAdminAuthenticated:false,
  currentMember:null,
  signup:null,
  signin:null,
  logout:null
}

const AuthContext=createContext(defalutAuthContext)
export const useAuth=()=>useContext(AuthContext)
export const AuthProvider=({children})=>{
  const [isAuthenticated,setIsAuthenticated]=useState(false)
  const [isAdminAuthenticated,setIsAdminAuthenticated]=useState(false)
  const [payload,setPayload]=useState(null)
  return(
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isAdminAuthenticated,
        currentMember:payload,
        signup:async(data)=>{
          const userData=await signUp({
            name:data.name,
            email:data.email,
            password:data.password,
            confirmPassword:data.confirmPassword
          })
          return userData
        },
        signin:async(data)=>{
          const userData=await signIn({
            email:data.email,
            password:data.password
          })
          const tempPayload=userData.data.token
          if(tempPayload){
            setIsAuthenticated(true)
            setIsAdminAuthenticated(false)
            setPayload(tempPayload)
            localStorage.setItem('authToken',userData.data.token)
          }else{
            setIsAuthenticated(false)
            setIsAdminAuthenticated(false)
            setPayload(null)
          }
          return userData.status
        },
        logout:()=>{
          localStorage.removeItem('authToken')
          setIsAdminAuthenticated(false)
          setIsAuthenticated(false)
          setPayload(null)
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}