import { Button, Form } from "react-bootstrap"
import StyledCreateInputgroup from "../../../components/input/input"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../../api/user";
import style from './signin.module.scss'
import { useAuth } from "../../../context/userContext";

function Signin(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signin,isAuthenticated}=useAuth()  
  const navigate=useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }


   const handleSubmit=async(e)=>{
    e.preventDefault()
    const status=await signin({email,password})
    if(status==='success'){
      setEmail('');
      setPassword('');

    }
  }

  useEffect(()=>{
    if(isAuthenticated){
      window.location.href='/'
    }else{
      navigate('/signin')
    }
  },[navigate,isAuthenticated])
  return(
    <div className={style.loginWrapper}>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit} className={style.form}>
      <StyledCreateInputgroup
        label='Email'
        type='text'
        name='email'
        value={email}
        onChange={handleEmailChange}
        placeholder='Please enter email'
        controlId="Email"
      />
      <StyledCreateInputgroup
        label='Password'
        type='password'
        name='password'
        value={password}
        onChange={handlePasswordChange}
        placeholder='Please enter password'
        controlId="Password"
      />
        <div className={style.button}>
          <Button className="mb-5" type="submit">Login</Button>
          <p>沒帳號嗎?<Link to='/signup'>Sign up</Link></p>
        </div>
      </Form>
    </div>
    
  )
}

export default Signin