import { useState } from 'react';
import './AuthPage.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage">
      <div>
        <img src="./Logo.png" alt="Home" className="logo"/>
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up' : 'Log In'}</h3>
      </div>
      {showLogin ? 
        <LoginForm setUser={setUser} /> 
        : 
        <SignUpForm setUser={setUser} />
      }
    </main>
  );
}