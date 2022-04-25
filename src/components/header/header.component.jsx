import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

function Header({ currentUser, hidden }) {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>
          SHOP
        </Link>
        <Link to='/contact' className='option'>
          CONTACT
        </Link>
        {currentUser ? (
          <>
            <div className='option' onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          </>
        ) : (
          <Link className='option' to='/sign-in'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden? null : <CartDropdown />}
    </div>
  );
}

//createStructuredSelector()
//will automatically pass top lvl state that we get as mapStateToProps to each selector
//it is recommended to use instead of below example because in the future we do need to pull in more
//that is easy because we already converted our code


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

//it's equal with below. it helps to not repeat code 'state, selectCurrentUser(state), selectCarHidden(state), etc

// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state)
// });

export default connect(mapStateToProps)(Header);
