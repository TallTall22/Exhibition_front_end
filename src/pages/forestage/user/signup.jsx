import { Button, Form } from "react-bootstrap"
import StyledCreateInputgroup from "../../../components/input/input"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../../api/user";
import style from './signup.module.scss'
function Signup(){

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const navigate=useNavigate()
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  }

   const handleSubmit=async(e)=>{
    e.preventDefault()
    if (name.length === 0) return;
    if (email.length === 0) return;
    if (password.length === 0) return;
    if(confirmPassword.length===0)return;
    const data=await signUp({name,email,password,confirmPassword})
    if(data.status==='success'){
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');

    navigate('/signin')
    }
    
  }

  return(
    <div className={style.signupWrapper}>
      <h2>Register</h2>
      <Form className={style.form} onSubmit={handleSubmit}>
      <StyledCreateInputgroup
        label='Name'
        type='text'
        name='name'
        value={name}
        onChange={handleNameChange}
        placeholder='Please enter name'
        controlId="CreateName"
      />
      <StyledCreateInputgroup
        label='Email'
        type='text'
        name='email'
        value={email}
        onChange={handleEmailChange}
        placeholder='Please enter email'
        controlId="CreateEmail"
      />
      <StyledCreateInputgroup
        label='Password'
        type='password'
        name='password'
        value={password}
        onChange={handlePasswordChange}
        placeholder='Please enter password'
        controlId="CreatePassword"
      />
      <StyledCreateInputgroup
        label='Confirm Password'
        type='password'
        name='confirmPassword'
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        placeholder='Please enter confirmPassword'
        controlId="CreateConfirmPassword"
      />
      <div className={style.button}>
        <Button className="mb-5" type="submit">Sign up</Button>
        <p>已經有帳號嗎?<Link to='/signin'>Sign in</Link></p>
      </div>
    </Form>
    </div>
    
  )
}

export default Signup