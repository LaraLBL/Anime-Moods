import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/searchBar/SearchBar';
import AuthPage from '../AuthPage/AuthPage';
import NoteworthyPage from '../NoteworthyPage/NoteworthyPage';
import MoodPage from '../MoodPage/MoodPage';
import HomePage from '../HomePage/HomePage';
import MyAnimePage from '../MyAnimePage/MyAnimePage';
import React, { useState } from 'react';
import { getUser } from '../../utilities/users-service';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App chillin">
      { user ?
      <>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/Noteworthy" element={<NoteworthyPage />} />
        <Route path="/mood" element={<MoodPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/myanime" element={<MyAnimePage />} />
      </Routes>
      <SearchBar/>
      </>
      :
      <AuthPage setUser={setUser} />
      }
    </main>
  );
}

