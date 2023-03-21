import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { actPreloadProcess } from './states/isPreload/action';

import Loading from './components/Loading';
import Phome from './pages/Phome';
import Plogin from './pages/Plogin';
import Pregister from './pages/Pregister';

import Header from './components/Header';
import HeaderUser from './components/HeaderUser';
import PdetailTherad from './pages/PdetailTread';
import Pleaderboards from './pages/Pleaderboards';

function App() {
  const { authUser = null } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    // @TODO: dispatch async action to preload app
    dispatch(actPreloadProcess());
  }, [dispatch]);

  if (authUser === null) {
    return (
      <>
        <Loading />
        <Header nmApp="Forum Informasi" />
        <main className="containerMFC1">
          <Routes>
            <Route path="/*" element={<Plogin />} />
            <Route path="/login" element={<Plogin />} />
            <Route path="/register" element={<Pregister />} />
          </Routes>
        </main>
        <footer className="p20 talgC mt10 bgray">2023@mfCenter</footer>
      </>
    );
  }
  return (
    <>
      <Loading />
      <HeaderUser nmApp="Forum Informasi" />
      <main>
        <Routes>
          <Route path="/*" element={<Phome />} />
          <Route path="/detail/:id" element={<PdetailTherad />} />
          <Route path="/leaderboards" element={<Pleaderboards />} />
        </Routes>
      </main>
      <footer className="p20 talgC mt10 bgray">2023@mfCenter</footer>
    </>
  );
}

export default App;
