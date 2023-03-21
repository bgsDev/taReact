/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actGetLeaderboards } from '../states/leaderboards/action';
import { JudulHr } from '../components/sf/JudulHr';

function Pleaderboards() {
  const { leaderboards } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetLeaderboards());
  }, [dispatch]);
  return (
    <div className="containerMFC1 boxRadius15">
      <JudulHr judul="Klasmen Pengguna Aktif" cls="" />
      {
        leaderboards.map(({ user, score } = v) => (
          <div className="grid2row70 m5">
            <div className="flexDR">
              <img src={user.avatar} className="radius50" alt="icon user" height="50px" />
              <span className="algSC m5">{user.name}</span>
            </div>
            <span className="algSC ">{score}</span>
          </div>
        ))
      }
    </div>
  );
}
export default Pleaderboards;
