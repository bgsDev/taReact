/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/button-has-type */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { JudulHr } from './sf/JudulHr';
import { showFormattedDate } from './sf/Support';

function ItemComment({
  id, content, createdAt, owner, upVotesBy,
  downVotesBy, onvote, unvote, idMe,
}) {
  const oncvote = () => {
    onvote(id);
  };
  const oncUnvote = () => {
    unvote(id);
  };
  return (
    <div className="grid2row20 boxRadius15">
      <div className="flexDC">
        <img src={owner.avatar} alt="logo user" className="bradius15" />
      </div>
      <div className="flexDC m3">
        <JudulHr judul={` ${owner.name}`} cls="" />
        <span className="p5 bgreend2 cwhite">{showFormattedDate(createdAt)}</span>
        <div className="p5">{parse(content)}</div>
        <div className="flexDR jcCenter">
          <button onClick={oncvote} className="btnLink m3 minBtnIcon bbnone">
            <FaHeart className={`fz12 pkk5 ${
              ((upVotesBy.filter((v1) => (v1.includes(idMe))).length === 1) && 'cred')
            }`}
            />
            <b className="">{upVotesBy.length}</b>
          </button>
          <button onClick={oncUnvote} className="btnLink m3 minBtnLink  bbnone">
            <FiHeart className={`fz12 pkk5 ${
              ((downVotesBy.filter((v1) => (v1.includes(idMe))).length === 1) && 'cred')
            }`}
            />
            <b className="">{downVotesBy.length}</b>
          </button>
        </div>
      </div>
    </div>
  );
}

ItemComment.propTypes = {
  id: PropTypes.string.isRequired,
  idMe: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  upVotesBy: PropTypes.array.isRequired,
  downVotesBy: PropTypes.array.isRequired,
  createdAt: PropTypes.string.isRequired,
  onvote: PropTypes.func.isRequired,
  unvote: PropTypes.func.isRequired,
  owner: PropTypes.object.isRequired,
};

export default ItemComment;
