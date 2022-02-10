import React, { useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';


const Register = () => {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformpassword, setConformpassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
        navigate('/')
    }
}, [])

  const collectData = async () => {
    console.warn(firstname, lastname, email, password, conformpassword, phonenumber);

    const result = await fetch('http://localhost:5000/api/user/signup', {
      method: 'post',
      body: json.stringify({ firstname, lastname, phonenumber, email, password, conformpassword }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    result = await result.json();
    console.warn(result.json());

    navigate('/')

  }
  return (
    <div>

      <h1> Register </h1>
      <input className='inputBox' type="text"
        value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder='First Name' />

      <input className='inputBox' type="text"
        value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder='Last Name' />

      <input className='inputBox' type="text"
        value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />

      <input className='inputBox' type="password"
        value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />

      <input className='inputBox' type="password"
        value={conformpassword} onChange={(e) => setConformpassword(e.target.value)} placeholder='Conform Password' />

      <input className='inputBox' type="number"
        value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} placeholder='Phone Number' />

      <button onClick={collectData} className="appButton" type='Button'> Sign Up </button>


    </div>
  );
}

export default Register;