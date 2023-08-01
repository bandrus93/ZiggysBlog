import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import About from './pages/About';
import Board from './pages/Board';
import Error from './pages/Error';
import Feed from './pages/Feed';
import Shop from './pages/Shop';
import { useState } from 'react';
import UserContext from './contexts/UserContext';

function App() {
  const [user, setUser] = useState();

  return (
    <BrowserRouter>
    <UserContext.Provider value={user}>
    <NavBar />
    </UserContext.Provider>
      <Routes>
        <Route path='/feed' index element={<Feed />} />
        <Route path='/about' element={<About />} />
        <Route path='/message-board' element={<Board />} />
        <Route path='/news' element={<Feed />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
