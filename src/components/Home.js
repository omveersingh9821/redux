import React from "react";

const Home = (props) => {
  // console.log('Home props', props);
  return (
    <div className="cart">
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://salt.tikicdn.com/ts/product/ae/b0/fb/6928249f114e1231ada67df7b7c028f8.jpg"
            alt="iphone"
          />
        </div>
        <div className="text-wrapper item">
          <span>Iphone 10s</span>
          <span>Price: $999</span>
        </div>
        <div className="btn-wrapper item">
          {/* <button onClick={() => props.addToCartHandler({ name: 'Iphone 10s', price: '$999' })}>
          AddToCart
          </button> */}
          <img
            onClick={() => props.addToCartHandler({ name: 'Iphone 10s', price: '$999' })}
            src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png" alt="add_icon" />
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" alt="remove-icon" 
            onClick={()=>props.removeToCartHandler({ name: 'Iphone 10s'})}
            />
        </div>
      </div>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://www.lg.com/in/images/washing-machines/md07540887/gallery/FHM1408BDL-Washing-Machines-Right-View-MZ-04-v1.jpg"
            alt="washing machine"
          />
          
        </div>
        <div className="text-wrapper item">
          <span>Washing Machine</span>
          <span>Price: $499</span>
        </div>
        <div className="btn-wrapper item">
          {/* <button onClick={() => props.addToCartHandler({name:'Washing Machine',price:'$499'})}>Add To Cart</button> */}
          <img
            onClick={() => props.addToCartHandler({name:'Washing Machine',price:'$499'})}
            src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png" alt="add_icon" />
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" alt="remove-icon" 
            onClick={()=>props.removeToCartHandler({ name:'Washing Machine'})}
            />
        </div>
      </div>

      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://asics.scene7.com/is/image/asics/1183C102_100_SR_RT_GLB?$otmag_product_shoes$&qlt=99,1"
            alt="shoes"
          />
        </div>
        <div className="text-wrapper item">
          <span>Onitsuka</span>
          <span>Price: $99</span>
        </div>
        <div className="btn-wrapper item">
          {/* <button
            onClick={() => props.addToCartHandler({name:'OnitSuka',price:'$99'})}
          >
            Add To Cart
          </button> */}
          <img
            onClick={() => props.addToCartHandler({name:'OnitSuka',price:'$99'})}
            src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png" alt="add_icon" />
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" alt="remove-icon" 
            onClick={()=>props.removeToCartHandler({ name:'OnitSuka'})}
            />
        </div>
      </div>
    </div>
  );
};

export default Home;
