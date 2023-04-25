import React from 'react';
import { UserAuth } from '../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logout();
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  if (user) {
    return (
      <div className='max-w-[1140px] mx-auto'>
        <div className='flex justify-between items-center my-12 py-9 rounded-div'>
          <div>
            <h1 className='text-2xl font-bold'>Account</h1>
            <div>
              <p>Welcome, {user?.email}</p>
            </div>
          </div>
          <div>
            <button
               onClick={handleSignOut}
              className='border px-7 py-4 rounded-3xl shadow-lg hover:shadow-3xl'
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    ); 
  } else {
    return <Navigate to='/signin' />;
  }
  }; 

export default Account;














