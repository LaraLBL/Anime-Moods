import './SignUpForm.css';
import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import './SignUpForm.css';

export default class SignUpForm extends Component {
 state = {
   name: '',
   email: '',
   password: '',
   confirm: '',
   error: ''
 };

 handleSubmit = async (evt) => {
   evt.preventDefault();
   try {
     const formData = { ...this.state };
     delete formData.confirm;
     delete formData.error;
     const user = await signUp(formData);
     this.props.setUser(user);
   } catch {
     this.setState({
       error: 'Sign Up Failed - Try Again'
     });
   }
 }

 handleChange = (evt) => {
   this.setState({
     [evt.target.name]: evt.target.value,
     error: ''
   });
 }

 render() {
   const disable = this.state.password !== this.state.confirm;
   return (
    <div>
     <div className="signup-form">
       <form autoComplete="off" onSubmit={this.handleSubmit}>
         <label>Username</label>
         &nbsp;
         <input 
          placeholder="username"
          type="text" 
          name="name" 
          value={this.state.name} 
          onChange={this.handleChange} 
          required 
         />
         &nbsp;&nbsp;
         <label>Email</label>
         &nbsp;
         <input 
          placeholder="email address"
          type="email" 
          name="email" 
          value={this.state.email} 
          onChange={this.handleChange} 
          required 
         />
         &nbsp;&nbsp;
         <label>Password</label>
         &nbsp;
         <input 
          placeholder="password"
          type="password" 
          name="password" 
          value={this.state.password} 
          onChange={this.handleChange} 
          required 
         />
         &nbsp;&nbsp;
         <label>Confirm Password</label>
         &nbsp;
         <input 
          placeholder="confirm password"
          type="password" 
          name="confirm" 
          value={this.state.confirm} 
          onChange={this.handleChange} 
          required />
          &nbsp;&nbsp;
         <button type="submit" disabled={disable}>Sign Up</button>
       </form>
     </div>
     <p className="error-message">&nbsp;{this.state.error}</p>
    </div>
   );
 }
}