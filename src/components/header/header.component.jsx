import React from 'react';
import {Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.util';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden, selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector'

import { ReactComponent as Logo} from '../../assets/crown.svg';

import './header.style.scss';

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className = 'option' to='/shop'>SHOP</Link>
            <Link className = 'option' to='/shop'>CONTACT</Link>
            { currentUser ? 
                <div className="option" onClick={ () => auth.signOut()}>
                    Sign Out
                </div> : 
                <Link className="option" to='/signin'>
                    Sign In
                </Link>
            }
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });

export default connect(mapStateToProps)(Header);
