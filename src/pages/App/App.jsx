import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import React, { useState } from 'react';
import { getUser } from '../../utilities/users-service';


export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ?
      <>
      <NavBar/>
      </>
      :
      <AuthPage setUser={setUser} />
      }
    </main>
  );
}


