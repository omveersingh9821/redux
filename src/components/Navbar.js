import React from 'react'

const Navbar = (props) => {
    const { cardData } = props;
    // console.log('navbar props',props)
  return (
      <div>
          <nav className='navbar'>
              <div className='cart-name'>
                  <h1>Cart</h1>
              </div>
              <div className="cart-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/4290/4290854.png" alt="cart-icon" />
                  <div className='notification'>{ cardData.length }</div>
              </div>
          </nav>
    </div>
  )
}

export default Navbar