import React, { useEffect } from 'react';
import { API_URL, MAIN_URL } from '../../config';
import { Fade } from 'react-reveal';
import axios from 'axios';
import './productcard.css';
import { getLocalData } from '../../utils/common';
import { useNavigate } from 'react-router';
import CreateBlog from '../../pages/Profile/Create_Blog/CreateBlog';
import { Link } from 'react-router-dom';

const ProductCards = () => {
  const [postData, setPostData] = React.useState([]);
  const [editField, setEditField] = React.useState(false);
  const [editData, setEditData] = React.useState();
  const [open, setOpen] = React.useState(false);

  const userId = getLocalData();
  const navigate = useNavigate();

  useEffect(() => {
    getPostData();
  }, []);

  const getPostData = async () => {
    const viewData = [];
    if (window.location.pathname === '/views/all') {
      try {
        setEditField(true);

        await axios
          .get(`${API_URL}/post/all`)
          .then(res => {
            res.data.forEach(element => {
              viewData.push(element);
              setPostData(viewData);
            });
          })
          .catch(err => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        setEditField(false);

        await axios
          .get(`${API_URL}/post/all/user/${userId.getId}`)
          .then(res => {
            res.data.forEach(data => {
              viewData.push(data);
              setPostData(viewData);
            });
          })
          .catch(err => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  // const specificData = data => {
  //   setOpen(() => {
  //     return true;
  //   });
  //   setEditData(data);
  //   navigate();
  // };

  return (
    <>
      <div className='list__header'>
        <h1 className='show__list__title'>Find Preferable Content</h1>
        <input
          type='text'
          className='find__post__input'
          placeholder='Find the relevant contents'
        />
      </div>
      <div className='list__card__container'>
        {postData.map((element, index) => {
          return (
            <Fade bottom key={index}>
              <div className='list__card'>
                <div className='list__card__image__container'>
                  <img
                    crossOrigin='anonymous'
                    src={`${MAIN_URL}/${element.postImage}`}
                    alt='sample'
                    className='list__card__image'
                  />
                </div>
                <div className='list__card__body'>
                  <h3 className='body__title'>{element.post_title}</h3>
                  <p className='body__text'>{element.post_body}</p>
                </div>
                {editField === false ? (
                  <div className='list__card__footer'>
                    <Link to={`/profile/update_blog/${element._id}`}>
                      <button
                        className='edit__card__btn'
                        // onClick={() => {
                        //   specificData(element);
                        // }}
                      >
                        Edit
                      </button>
                    </Link>
                  </div>
                ) : null}
              </div>
            </Fade>
          );
        })}
      </div>
      {/* <CreateBlog open={open} data={editData} /> */}
    </>
  );
};

export default ProductCards;
