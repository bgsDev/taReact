/* eslint-disable react/button-has-type */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { FaHeart, FaComment } from 'react-icons/fa';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { showFormattedDate } from './sf/Support';

function ItemThread({
  id, title, ownerId, onvote, unvote, upVotesBy,
  downVotesBy, totalComments, category, createdAt,
  body, idMe, user,
}) {
  if (user === undefined) {
    return null;
  }
  const oncvote = () => {
    onvote(id);
  };
  const oncUnvote = () => {
    unvote(id);
  };
  return (
    <div key={id} className="boxRadius15">
      <div className="grid2row20">
        <div className="flexDC">
          <img src={user.avatar} alt="Logo user" className="hfull wfull bradius15" />
        </div>
        <div className="flexDC pkk5">
          <Link to={`/detail/${id}`} className="fz30"><b>{title}</b></Link>
          <div className="flexDR">
            <p className="p5 bgreend1 cwhite">{`@${user.name} - #${category}`}</p>
            <p className="p5 bgreend2 cwhite">{showFormattedDate(createdAt)}</p>
          </div>
          <div className="p3">{parse(String(body).length >= 250 ? `${String(body).substring(0, 250)}...` : body)}</div>
          <div className="flexDR">
            <button onClick={oncvote} className="btnLink minBtnLink bbnone">
              <FaHeart className={`fz12 pkk5 ${
                ((upVotesBy.filter((v1) => (v1.includes(idMe))).length === 1) && 'cred')
              }`}
              />
              <b className="">{upVotesBy.length}</b>
            </button>
            <button onClick={oncUnvote} className="btnLink btras minBtnLink bbnone">
              <FiHeart className={`fz12 pkk5 ${
                ((downVotesBy.filter((v1) => (v1.includes(idMe))).length === 1) && 'cred')
              }`}
              />
              <b className="">{downVotesBy.length}</b>
            </button>
            <Link to={`/detail/${id}`} className="btnLink minBtnLink bbnone">
              <FaComment className="fz12 pkk5" />
              <b className="">{totalComments}</b>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

ItemThread.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  upVotesBy: PropTypes.array.isRequired,
  downVotesBy: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,

  totalComments: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onvote: PropTypes.func.isRequired,
  unvote: PropTypes.func.isRequired,
  idMe: PropTypes.string.isRequired,
};

export default ItemThread;
