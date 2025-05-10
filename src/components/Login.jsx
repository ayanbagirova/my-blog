
import Swal from 'sweetalert2';
import "../css/Login.css";
import { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";



const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
      setShowPassword((prev) => !prev);
    };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!email || !password) {
          Swal.fire({
            icon: 'warning',
            title: 'Missing Fields',
            text: 'Please enter both email and password!',
          });
        } else {
          Swal.fire({
            icon: 'success',
            title: 'Login Successful'
          
          });
        }
      };
    
  return (
   <>
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" value={email}  onChange={(e) => setEmail(e.target.value)} />

        <label>Password</label>
        <div className="password-input">
          <input type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"  value={password}
            onChange={(e) => setPassword(e.target.value)}/>
          <span className="eye-icon" onClick={togglePassword}>
          {showPassword ? <FaEyeSlash />
 : <FaEye />
          }</span>
        </div>

        <a href="#" className="forgot-password">Did you forget your password?</a>

        <button className="login-btn">Log In</button>
      </form>

     
    </div>
   </>

  )
}

export default Login