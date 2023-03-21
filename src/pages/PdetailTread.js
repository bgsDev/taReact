/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  FiBook, FiCheckSquare,
} from 'react-icons/fi';
import { useInputInner } from '../hooks/useInput';

import {
  actDetailThread, actDetailUnvote, actDetailOnvote,
  actAddNewComment, actOnvote, actUnvote,
} from '../states/threadDetail/action';
import ItemDetail from '../components/ItemDetail';
import { FcontentEditable } from '../components/Finput';
import ItemComment from '../components/ItemComment';

function PdetailTherad() {
  const { threadDetail: thread, authUser } = useSelector((state) => state);
  const { id: idMe } = authUser;
  const dispatch = useDispatch();
  const { id } = useParams();
  const [content, setContent] = useInputInner('');
  const onvote = () => {
    dispatch(actOnvote({ id }));
  };
  const unvote = () => {
    dispatch(actUnvote({ id }));
  };

  const oncSetNewComment = () => {
    dispatch(actAddNewComment({ id, content }));
    setContent('');
  };

  const onvoteComment = (idComment) => {
    dispatch(actDetailOnvote({ id, idComment }));
  };
  const unvoteComment = (idComment) => {
    dispatch(actDetailUnvote({ id, idComment }));
  };
  useEffect(() => {
    dispatch(actDetailThread({ id }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  if (Object.keys(thread).length >= 1) {
    return (
      <div className="containerMFC1 bgray boxRadius15">
        <ItemDetail key={thread.id} {...thread} idMe={idMe} search="" onvote={onvote} unvote={unvote} />
        <hr />
        <div className="grid2row80">
          <FcontentEditable
            icon={<FiBook />}
            clsIcon="minWinForm cblack"
            cls=""
            plac="new comments"
            type="text"
            value={content}
            onchange={setContent}
          />
          <button onClick={oncSetNewComment} className="btnLink cwhite bgreend2 algSC m3 maxBtnLink   bnone">
            <FiCheckSquare className="fz12 pkk5" />
            <span>Entri</span>
          </button>
        </div>
        <hr />
        {
            thread.comments.map((v) => (
              <ItemComment key={v.id} {...v} idMe={idMe} onvote={onvoteComment} unvote={unvoteComment} />
            ))
        }
        <hr />
      </div>
    );
  }
  return '';
}
export default PdetailTherad;
