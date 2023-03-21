import React from 'react';
import { useDispatch } from 'react-redux';
import {
  FiPenTool, FiBook, FiBox,
} from 'react-icons/fi';
import { FinputG, FcontentEditable } from './Finput';
import { useInput, useInputInner } from '../hooks/useInput';
import { actSendThread } from '../states/thread/action';

function FnewDiskusi() {
  const dispatch = useDispatch();

  const [title, setTitle] = useInput('');
  const [category, setKategori] = useInput('');
  const [body, setBody] = useInputInner('');

  const oncAddThread = async (event) => {
    event.preventDefault();
    dispatch(actSendThread({ title, category, body }));
  };

  return (
    <form onSubmit={oncAddThread}>
      <FinputG
        icon={<FiPenTool />}
        clsIcon="minWinForm cblack"
        cls=""
        plac="Title"
        type="text"
        value={title}
        onchange={setTitle}
      />
      <FinputG
        icon={<FiBox />}
        clsIcon="minWinForm cblack"
        cls=""
        plac="Kategori"
        type="text"
        value={category}
        onchange={setKategori}
      />
      <FcontentEditable
        icon={<FiBook />}
        clsIcon="minWinForm cblack"
        cls="cblack"
        plac="body.."
        type="text"
        value={body}
        onchange={setBody}
      />
      <button type="submit" className="btnLink wfull">Entri</button>
    </form>
  );
}
export default FnewDiskusi;
