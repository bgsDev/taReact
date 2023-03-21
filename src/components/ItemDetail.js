/* eslint-disable react/button-has-type */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { FaHeart, FaComment } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { JudulHr } from './sf/JudulHr';
import { showFormattedDate } from './sf/Support';

function ItemDetail({
  id, title, onvote, unvote, upVotesBy,
  downVotesBy, category, createdAt,
  body, owner, comments, idMe,
}) {
  return (
    <div className="grid2row20">
      <div className="flexDC">
        <img src={owner.avatar} alt="saa" />
        <JudulHr judul={` ${owner.name}`} cls="talgC" />
        <div className="flexDR jcCenter">
          <button onClick={onvote} className="btnLink minBtnLink bbnone">
            <FaHeart className={`fz12 pkk5 ${
              ((upVotesBy.filter((v1) => (v1.includes(idMe))).length === 1) && 'cred')
            }`}
            />
            <b className="">{upVotesBy.length}</b>
          </button>
          <button onClick={unvote} className="btnLink btras minBtnLink bbnone">
            <FiHeart className={`fz12 pkk5 ${
              ((downVotesBy.filter((v1) => (v1.includes(idMe))).length === 1) && 'cred')
            }`}
            />
            <b className="">{downVotesBy.length}</b>
          </button>
          <Link to={`/detail/${id}`} className="btnLink minBtnLink bbnone">
            <FaComment className="fz12 pkk5" />
            <b className="">{comments.length}</b>
          </Link>
        </div>
      </div>
      <div className="flexDC p5">
        <JudulHr judul={` ${title}`} cls="" />
        <div className="flexDR">
          <span className="p5 bgreend1 cwhite">{`#${category}`}</span>
          <span className="p5 bgreend2 cwhite">{showFormattedDate(createdAt)}</span>
        </div>
        <div className="p5">{parse(body)}</div>
      </div>
    </div>
  );
}

ItemDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  idMe: PropTypes.string.isRequired,

  upVotesBy: PropTypes.array.isRequired,
  downVotesBy: PropTypes.array.isRequired,

  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onvote: PropTypes.func.isRequired,
  unvote: PropTypes.func.isRequired,

  owner: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
};

export default ItemDetail;
