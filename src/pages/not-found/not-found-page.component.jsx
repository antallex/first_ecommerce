import React from 'react';
import { Link } from 'react-router-dom';
import './not-found-page.style.scss'
import { ReactComponent as Logo} from '../../assets/crown.svg'

function NotFoundPage() {
  return <div className='flex items-center flex-col mt-48'>
	  <Logo className='logo-x float' />
	  <h1 className='text-3xl'>We are sorry but this page does not exist  :\</h1>
	  <p className=' mt-2 mb-24 text-lg'>You can go directly to homepage by clicking the down link</p>
	  <Link to='/' className='text-3xl hover-animation'>GO HOME</Link>
  </div>;
}

export default NotFoundPage;
