import React from 'react'
import './cart-dropdown.style.scss'
import CustomButton from '../custom-button/custom-button.component'

function CartDropdown() {
  return (
    <div className='cart-dropdown'>
        <div className="cart-items"/>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown