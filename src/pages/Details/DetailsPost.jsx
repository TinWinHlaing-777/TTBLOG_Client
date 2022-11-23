import React, { useEffect } from 'react';
import './detailPost.css';
import Navbar from '../../components/Navbar/Navbar';
import { AiFillLike } from 'react-icons/ai';
import { useParams } from 'react-router';
import axios from 'axios';
import { API_URL, MAIN_URL } from '../../config';

const DetailsPost = () => {
  const [detailInfo, setDetailInfo] = React.useState([]);
  const [num, setNum] = React.useState();

  const { id } = useParams();

  useEffect(() => {
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
    showDetails();
  }, [id]);

  const addLike = () => {
    const temp = 0;
    setNum(() => {
      return temp + 1;
    });
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
              <button className='btn__like' onClick={() => addLike()}>
                <AiFillLike />
                Like
              </button>
              <input
                type='text'
                name='commetn'
                id='comment'
                className='comment__container'
                placeholder='Write a comment'
              />
            </div>
            <div className='detail__comment'>
              <p className='show__like'>{num} like this post</p>
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
