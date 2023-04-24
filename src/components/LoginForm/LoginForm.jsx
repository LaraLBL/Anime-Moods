import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import './LoginForm.css';

export default function LoginForm({ setUser }) {
 const [credentials, setCredentials] = useState({
   name: '',
   password: ''
 });
 const [error, setError] = useState('');

 function handleChange(evt) {
  setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
  setError('');
 }

 async function handleSubmit(evt) {
  evt.preventDefault();
  try {
    const user = await usersService.login(credentials);
    setUser(user);
  } catch {
    setError('Log In Failed! Please Try Again!');
  }
 }

 return (
   <div>
     <div className="login-form">
       <form autoComplete="off" onSubmit={handleSubmit}>
         &nbsp;
         <input 
          placeholder='Username'
          type="text" 
          name="name" 
          value={credentials.name} 
          onChange={handleChange} 
          required 
         />
         &nbsp;&nbsp;
         <input 
          placeholder='password'
          type="password" 
          name="password" 
          value={credentials.password} 
          onChange={handleChange} 
          required 
         />
          &nbsp;&nbsp;
         <button type="submit">Log In</button>
       </form>
     </div>
     <p className="error-message">&nbsp;{error}</p>
   </div>
 );
}