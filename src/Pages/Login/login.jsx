import React from 'react'
import Forminput from '../../Components/Forminput/Forminput'
import './login.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { auth,provider } from '../Home/firebase'
import { signInWithPopup } from 'firebase/auth';
import { useEffect } from 'react';

import Home from '../Home/home'


const image1 =<img src='data:image/png;base64,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'></img>

const image2 = <img src='https://tse4.mm.bing.net/th/id/OIP.9yaAIVEhbwVgZ4OVFL82QQHaHa?pid=ImgDet&w=512&h=512&rs=1'></img>

const Login = () => {
   
    const[inputvalue,setinputvalue]=useState({
        Username:"",
        Email:"",
        Password:"",
        ConfirmPassword:"",
        
    })

    const inputs =[
    //     {
    //     id:1,
    //     name:"username",
    //     type:"text",
    //     placeholder:"Username"
    // },
    {
        id:1,
        name:"Email",
        type:"email",
        Placeholder:"email",
        errorMessage:"Email must be valid",
        required:true
    },
    {
        id:2,
        name:"Password",
        type:"Password",
        Placeholder:'Password',
        errorMessage: "Password must be 8 character long",
        required: true
    },
    // {
    //     id:4,
    //     name:"confirmPassword",
    //     type:"Password",
    //     placeholder:"ConfirmPassword"
    // }

];

const handleChange =(e)=>{
    setinputvalue ({...inputvalue, [e.target.name]:e.target.value})
}
const handleregister =(e)=>{
    e.preventDefault();
}
// Google authentication with firebase

const [value,setvalue]=useState(' ')

const signgoogle=()=>{
    signInWithPopup(auth,provider).then((data)=>{
      setvalue(data.user.email)
      localStorage.setItem("email" , data.user.email)
    })
}
useEffect(() => (
  setvalue(localStorage.getItem('email')))
)
//
  return (
    <div className='register'>
     <form>
     <h1 className='welcome'>Welcome to Bardeen</h1>
     <text className='welbelow'>Let's log in to launch your automations</text>
     {inputs.map((input)=> (
        <Forminput key={inputs.id}
         {...inputs} 
      
         value={inputvalue[input.name]}
        onChange={handleChange}
        />
     ))}
     <Link to ='/register' className='Newlink'>Create Account</Link>
     <Link className='forgetlink'>Forget Password?</Link>
        {/* <Forminput placeholder='Username'/>
        <Forminput placeholder='Email'/>
        <Forminput placeholder='Password'/>
        <Forminput placeholder='ConfirmPassword'/> */}
        <button type='submit' onClick={handleregister} >Sign in </button>
        <div className='google' >
        <Link to='#'>
        {image1}
            
        </Link>
        <text className='textgoogle'>Sign in with google</text>
        {value ?<Home/>:
        <Link to='#' className='forwardclass' onClick={signgoogle}><ArrowForwardIcon/></Link>}
        </div>
        <div className='google' >
        <Link to='#'>
            {image2}
        </Link>
        <text className='textgoogle'>Sign in with Github</text>
        {value ?<Home/>:
        <Link to='#' className='forwardclass' ><ArrowForwardIcon/></Link>}
        </div>


     </form>
    </div>
  )
}

export default Login;

