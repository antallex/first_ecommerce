import React from 'react';
import { Link } from 'react-router-dom';
import './not-found-page.style.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';

function NotFoundPage({ currentUser }) {

  return (
    <div className='flex items-center flex-col mt-48 px-10'>
      <Logo className='logo-x float' />
      {currentUser ? (
        <h1 className='text-xl mb-5'>Welcome {currentUser.displayName}</h1>
      ) : null}
      <h1 className='text-3xl'>We are sorry but this page does not exist :\</h1>
      <p className=' mt-2 mb-24 text-lg'>
        You can go directly to homepage by clicking the down link
      </p>
      <Link to='/' className='text-3xl hover-animation'>
        GO HOME
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(NotFoundPage);
