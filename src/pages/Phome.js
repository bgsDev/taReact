/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FnewDiskusi from '../components/FnewDiskusi';
import { JudulHr } from '../components/sf/JudulHr';
import { actAllThread, actOnvote, actUnvote } from '../states/thread/action';
import ListThread from '../components/ListThread';

function Phome() {
  const {
    thread, search, users, authUser,
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onvote = (id) => {
    dispatch(actOnvote({ id }));
  };
  const unvote = (id) => {
    dispatch(actUnvote({ id }));
  };

  useEffect(() => {
    dispatch(actAllThread());
  }, [dispatch]);

  const dataThread = thread.map((dt) => ({
    ...dt,
    user: users.find((user) => user.id === dt.ownerId),
    idMe: authUser.id,
  })).filter((dt) => dt.title.toUpperCase().includes(search.toUpperCase()) && dt.user !== undefined);
  return (
    <>
      <div className="containerMFC1">
        <div className="boxRadius15 bwhite">
          <h2 className="QuicksandLight">Buat Diskusi Baru</h2>
          <FnewDiskusi />
        </div>
      </div>

      <div className="containerMFC1">
        <div className="boxRadius15 bwhite">
          <JudulHr judul="Daftar Post" cls="QuicksandLight" />
          <ListThread thread={dataThread} onvote={onvote} unvote={unvote} />
        </div>
      </div>
    </>
  );
}

export default Phome;
