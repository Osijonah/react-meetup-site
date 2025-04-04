import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllMeetups from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import Favorites from './pages/Favorites';

import './App.css';

export function App() {
  return (
      <Layout>
        <Routes>
            <Route index element={<AllMeetups />}/>
            <Route path='newmeetup' element={<NewMeetup />}/>
            <Route path='favorites' element={<Favorites />}/>
        </Routes>
      </Layout>
    );
}
