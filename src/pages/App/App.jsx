import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import MoodPage from '../MoodPage/MoodPage';
import MyAnimePage from '../MyAnimePage/MyAnimePage';
import React, { useState } from 'react';
import { getUser } from '../../utilities/users-service';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ?
      <>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/mood" element={<MoodPage />} />
        <Route path="/myanime" element={<MyAnimePage />} />
      </Routes>
      </>
      :
      <AuthPage setUser={setUser} />
      }

      <h1 className='greeting'> What Will You <br/> Watch Next?</h1>
    </main>
  );
}

