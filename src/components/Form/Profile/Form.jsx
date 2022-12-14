import React, { useEffect } from 'react';
// import Dropper from "../../Dropper/Dropper";
import { MdOutlineUpdate } from 'react-icons/md';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import './form.css';
import { getLocalData } from '../../../utils/common';
import axios from 'axios';
import { API_URL, MAIN_URL } from '../../../config';
import { useCallback } from 'react';
import { useAlert } from 'react-alert';
import Dialog from '../../Dialog/Dialog';
import MenuItem from '../../../components/Menu/MenuItem';

const Form = () => {
  // react Hooks start
  const [loader, setLoader] = React.useState(false);
  const [values, setValues] = React.useState({
    first_name: '',
    last_name: '',
    business_name: '',
    org_name: '',
    email: '',
    password: '',
    new_password: '',
    co_password: '',
    about: '',
  });
  const [open, setOpen] = React.useState(false);
  const [isImage, setIsImage] = React.useState(false);
  const [imgPath, setImgPath] = React.useState();
  // react Hooks end

  // some declerations start
  const data = getLocalData();
  const alert = useAlert();
  // some declerations end

  // dialog state handling starts
  const setOpenDialog = () => {
    setOpen(true);
  };

  const setCloseDialog = () => {
    setOpen(false);
  };
  // dialog state handling ends

  // get user data function
  const getUserData = useCallback(() => {
    setLoader(true);
    try {
      axios
        .get(`${API_URL}/user/${data.getId}`)
        .then(res => {
          setValues({
            first_name: res.data.first_name,
            last_name: res.data.last_name,
            business_name: res.data.business_name,
            org_name: res.data.org_name,
            email: res.data.email,
          });
          setLoader(false);
        })
        .catch(err => {
          alert.error('Data cannot be fetched!');
        });
    } catch (error) {
      alert.error(error.message);
    }
  }, [data.getId, alert]);

  // get user image function
  const getUserImage = useCallback(() => {
    try {
      axios
        .get(`${API_URL}/user/get_user_image/${data.getId}`)
        .then(res => {
          setIsImage(true);
          if (JSON.stringify(res.data.image)==='{}') {
            setIsImage(false);
          }else {
            setIsImage(true);
            setImgPath(`${MAIN_URL}/${res.data.image}`)
          }
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error.message);
    }
  }, [data.getId]);

  // useEffect hooks starts
  useEffect(() => {
    getUserImage();
    getUserData();
  }, [getUserImage, getUserData]);
  // useEffect hooks ends

  // input handler
  const handleChange = props => event => {
    setValues({ ...values, [props]: event.target.value });
  };

  // update user info starts
  const updateUserInfo = () => {
    try {
      if (
        values.first_name !== '' &&
        values.last_name !== '' &&
        values.business_name !== '' &&
        values.org_name !== '' &&
        values.email !== ''
      ) {
        if (
          values.password !== '' &&
          values.new_password !== '' &&
          values.co_password !== '' &&
          values.new_password === values.co_password
        ) {
          console.log(values);
          const updateData = {
            token: data.getToken,
            data: {
              first_name: values.first_name,
              last_name: values.last_name,
              business_name: values.business_name,
              org_name: values.org_name,
              email: values.email,
              password: values.password,
              new_password: values.new_password,
              about: values.about,
            },
          };
          console.log(updateData);
          axios
            .patch(`${API_URL}/user/update/${data.getId}`, updateData)
            .then(res => {
              alert.success('User Profile Update successful!');
            })
            .catch(err => {
              alert.error('Something went wrong!Please try again later');
            });
        } else if (
          values.password === '' &&
          values.new_password === '' &&
          values.co_password === ''
        ) {
          const updateData = {
            first_name: values.first_name,
            last_name: values.last_name,
            business_name: values.business_name,
            org_name: values.org_name,
            email: values.email,
            about: values.about,
          };
          axios
            .patch(`${API_URL}/user/update/${data.getId}`, updateData)
            .then(res => {
              alert.success('Update profile successful!');
            })
            .catch(err => {
              alert.error('Something went wrong!Please try again later');
            });
        } else {
          alert.error(
            'Some form data is not matching with update requirement!'
          );
        }
      } else {
        alert.error('Important inputs should not be empty!');
      }
    } catch (error) {
      console.log(error);
    }
  };
  // update user info ends

  return (
    <>
      {open === false ? <MenuItem /> : null}
      {loader === true ? (
        <div className='spinner__img'>
          <img src='/images/spinner.gif' alt='spinner' />
        </div>
      ) : (
        <div
          className={
            open === false ? 'profile__container' : 'non__profile__container'
          }
        >
          <h3 className='p__title'>Profile</h3>
          <div className='first__container'>
            <button
              className='profile__image__container'
              onClick={setOpenDialog}
            >
              {isImage === true? (
                <img
                  crossOrigin='anonymous'
                  src={imgPath}
                  alt='profile'
                  className='profile__img'
                />
              ) : (
                <img
                  src='/images/profile.png'
                  alt='profile'
                  className='profile__img'
                />
              )}
              <p className='profile__image__text'>
                <AiOutlineCloudUpload className='profile__image__icon' />
                Upload image
              </p>
            </button>
            {/* <Dropper /> */}
            <div className='p__name__container'>
              <label htmlFor='first_name' className='p__label'>
                First Name
              </label>
              <input
                type='text'
                placeholder='First Name'
                id='first_name'
                className='p__input'
                value={values.first_name}
                onChange={handleChange('first_name')}
              />
              <label htmlFor='l_name' className='p__label'>
                Last Name
              </label>
              <input
                type='text'
                placeholder='Last Name'
                id='last_name'
                className='p__input'
                value={values.last_name}
                onChange={handleChange('last_name')}
              />
            </div>
          </div>
          <div className='second__container'>
            <label htmlFor='business_name' className='p__label'>
              Business Name
            </label>
            <input
              type='text'
              placeholder='Business Name'
              id='business_name'
              className='p__input'
              value={values.business_name}
              onChange={handleChange('business_name')}
            />
            <label htmlFor='org_name' className='p__label'>
              Organization Name
            </label>
            <input
              type='text'
              placeholder='Organization Name'
              id='org_name'
              className='p__input'
              value={values.org_name}
              onChange={handleChange('org_name')}
            />
            <label htmlFor='email' className='p__label'>
              Email{' '}
            </label>
            <input
              type='email'
              placeholder='Email'
              id='email'
              className='p__input'
              value={values.email}
              onChange={handleChange('email')}
            />
            <label htmlFor='c_pass' className='p__label'>
              Current Password{' '}
            </label>
            <input
              type='password'
              placeholder='Current Password'
              id='password'
              className='p__input'
              onChange={handleChange('password')}
            />
            <label htmlFor='new_password' className='p__label'>
              New Password{' '}
            </label>
            <input
              type='password'
              placeholder='New Password'
              id='new_password'
              className='p__input'
              onChange={handleChange('new_password')}
            />
            <label htmlFor='co_pass' className='p__label'>
              Confirm Password{' '}
            </label>
            <input
              type='password'
              placeholder='Confirm Password'
              id='co_password'
              className='p__input'
              onChange={handleChange('co_password')}
            />
            <label htmlFor='about' className='p__label'>
              About User{' '}
            </label>
            <textarea
              name='about_user'
              id='about'
              rows='5'
              className='p__input'
              placeholder='About User'
            ></textarea>
            <button
              type='submit'
              className='update__btn'
              onClick={updateUserInfo}
            >
              <MdOutlineUpdate />
              Update Info
            </button>
          </div>
        </div>
      )}
      <Dialog open={open} onClose={setCloseDialog} />
    </>
  );
};

export default Form;
