import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Searchuser } from './features/SearchUserSlice';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

export default function Searchpage() {
  const dispatch = useDispatch();
  const searchUserList = useSelector((state) => state.searchUser.SearchUserlist);
  const [searchValue, setSearchValue] = useState('');

  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  useEffect(() => {
   
  }, [searchUserList.data]);

  function handleClick() {
    dispatch(Searchuser(searchValue));
  }

  return (
    <div>
      <Navbar />
      <div className=''>
        <div className='h-16 bg-black flex items-center'>
          <div className='flex border-2 rounded-2xl border-slate-800 grow bg-gray-300'>
            <input
              type='text'
              placeholder='Search'
              value={searchValue}
              onChange={handleChange}
              className='bg-gray-300 text-black text-center outline-none p-1 rounded-2xl mt-1 grow'
            />
            <img
              onClick={handleClick}
              alt='Search Icon'
              className='w-10 aspect-square p-2 cursor-pointer'
              src='https://icon-library.com/images/search-icon-white/search-icon-white-16.jpg'
            />
          </div>
        </div>
      </div>
      <div >
      {searchUserList.data && searchUserList.data.length>0 && (
          <div className='mt-4 p-4 bg-white border rounded-md'>
            {searchUserList.data.map((user, index) => (
              <div key={index} className='flex items-center space-x-4 mb-2'>
                <div className='w-10 aspect-square rounded-full bg-black'>
                  <img
                    alt={user.username}
                    className='object-cover h-10 w-10 rounded-full'
                    src={user.profile_picture}
                  />
                </div>
                <Link to='/chat'>
                  <span className='text-black'>{user.username}</span>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
