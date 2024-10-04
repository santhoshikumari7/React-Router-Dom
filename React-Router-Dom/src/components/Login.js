import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
     <h2>Login</h2> 
     <form>
        <div>
            <label>Email</label>
            <input></input>
        </div>
        <div>
            <label>Password</label>
            <input></input>
        </div>
        <button>Login</button>
        <Link to="/home">Home</Link>
     </form>
     <br></br>
     <br></br>
    <Link to="signup">Signup</Link>
    </div>
  )
}

export default Login
