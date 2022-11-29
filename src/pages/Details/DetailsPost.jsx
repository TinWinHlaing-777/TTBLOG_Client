import React, { useEffect } from 'react';
import './detailPost.css';
import Navbar from '../../components/Navbar/Navbar';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { useParams } from 'react-router';
import axios from 'axios';
import { API_URL, MAIN_URL } from '../../config';
import { getLocalData } from '../../utils/common';

const DetailsPost = () => {
  const [detailInfo, setDetailInfo] = React.useState([]);
  const [like, setLike] = React.useState(false);
  const [comment, setComment] = React.useState('');
  const [commentInfo, setCommentInfo] = React.useState([]);

  const { id } = useParams();
  const userId = getLocalData().getId;

  const showDetails = async () => {
    const detailList = [];
    try {
      await axios
        .get(`${API_URL}/post/detail/${id}`)
        .then(res => {
          res.data.forEach(data => {
            detailList.push(data);
            setDetailInfo(detailList);
          });
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showDetails();
    getComment();
  }, []);

  const addLike = async () => {
    setLike(true);
    try {
      const likeData = {
        userId: userId,
      };
      await axios
        .patch(`${API_URL}/post/update/like/${id}`, likeData)
        .then(res => {
          showDetails();
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const removeLikes = async () => {
    setLike(false);
    try {
      const dislikeData = {
        userId: userId,
      };
      await axios
        .patch(`${API_URL}/post/update/dislike/${id}`, dislikeData)
        .then(res => {
          showDetails();
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const createComment = async e => {
    if (e.key === 'Enter') {
      try {
        const commentData = {
          comment: comment,
          userId: userId,
          postId: id,
        };
        await axios
          .post(`${API_URL}/comment/create`, commentData)
          .then(res => {
            if (res.status === 201) {
              setComment('');
              getComment();
            }
          })
          .catch(err => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getComment = async () => {
    let commentData = [];
    try {
      await axios
        .get(`${API_URL}/comment/getbypost/${id}`)
        .then(res => {
          res.data.forEach(data => {
            console.log(data);
          });
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      {detailInfo.map((element, index) => {
        return (
          <div className='detailPost__container' key={index}>
            <div className='detailPost__image'>
              <img
                crossOrigin='anonymous'
                src={`${MAIN_URL}/${element.postImage}`}
                alt='smaple'
                className='detail__image'
              />
            </div>
            <div className='detailPost__content'>
              <h1 className='detailPost__header'>{element.post_title}</h1>
              <p className='detailPost__body'>{element.post_body}</p>
            </div>
            <div className='detailPost__comment__container'>
              {like === false ? (
                <button className='btn__like' onClick={() => addLike()}>
                  <AiFillLike />
                  Like
                </button>
              ) : (
                <button className='btn__like' onClick={() => removeLikes()}>
                  <AiFillDislike />
                  Dislike
                </button>
              )}
              <input
                type='text'
                name='commetn'
                id='comment'
                className='comment__container'
                placeholder='Write a comment'
                value={comment}
                onChange={e => setComment(e.target.value)}
                onKeyDown={createComment}
              />
            </div>
            <div className='detail__comment'>
              <p className='show__like'>
                {element.likeCount.length} like this post
              </p>
              <div className='show__comment__container'>
                <img
                  src='/images/profile.png'
                  alt='profile'
                  className='comment__profile'
                />
                <p className='comment__text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  suscipit autem explicabo, ut ullam dignissimos tenetur
                  eligendi in velit, laborum, laudantium illo aut perferendis
                  animi. Eius iure quae quaerat in?
                  <span className='comment__author'>Author</span>
                </p>
              </div>
              <div className='show__comment__container'>
                <img
                  src='/images/profile.png'
                  alt='profile'
                  className='comment__profile'
                />
                <p className='comment__text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  suscipit autem explicabo, ut ullam dignissimos tenetur
                  eligendi in velit, laborum, laudantium illo aut perferendis
                  animi. Eius iure quae quaerat in?
                  <span className='comment__author'>Author</span>
                </p>
              </div>
              <div className='show__comment__container'>
                <img
                  src='/images/profile.png'
                  alt='profile'
                  className='comment__profile'
                />
                <p className='comment__text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  suscipit autem explicabo, ut ullam dignissimos tenetur
                  eligendi in velit, laborum, laudantium illo aut perferendis
                  animi. Eius iure quae quaerat in?
                  <span className='comment__author'>Author</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DetailsPost;
