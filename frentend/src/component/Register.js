import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import "./register.css"
import { AddUser } from '../redux/action/Action'
import axios from 'axios'

function Register() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [image,setImage]=useState([])
  const dispatch=useDispatch()

 const reg=async()=>{
    const formaData=new FormData()
    formaData.append('file',image)
    formaData.append('upload_preset','ml_default')
    console.log(formaData)
   if(image.length===undefined){
    await axios.post('https://api.cloudinary.com/v1_1/ducysfqbh/upload',formaData).then((res)=>
    { 
      console.log(res)
      const data={name,image:res.data.url,email,password}
      console.log(data);
      dispatch(AddUser(data))})} 
      
  }


  return (
    <>
  <title>Slide Navbar</title>
  <link rel="stylesheet" type="text/css" href="slide navbar style.css" />
  <link
    href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap"
    rel="stylesheet"
  />
  <div className="main">
    <input type="checkbox" id="chk" aria-hidden="true" />
    <div className="signup">
      
        <label htmlFor="chk" aria-hidden="true">
          Sign up
        </label>
        <input type="text" name="txt" placeholder="User name" required="" onChange={(e)=>setName(e.target.value)} />
        <input type="email" name="email" placeholder="Email" required="" onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" name="pswd" placeholder="Password" required="" onChange={(e)=>setPassword(e.target.value)} />
        <input type="file" name="image" placeholder="img" required="" accept='image/*' onChange={(e)=>setImage(e.target.files[0])}/>
        <button onClick={reg}>Sign up</button>
      
    </div>
    <div className="login">
      <form>
        <label htmlFor="chk" aria-hidden="true">
          Login
        </label>
        <input type="email" name="email" placeholder="Email" required="" />
        <input type="password" name="pswd" placeholder="Password" required="" />
        <button>Login</button>
      </form>
    </div>
  </div>
</>

  )
}

export default Register