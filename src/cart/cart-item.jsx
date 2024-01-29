import './cart.css'
import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from '../context/shop-context';
export const CartItem = (props) => {
    const {  data, setTotalAmount } = props;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
    const [quantity, setQuantity] = useState(1);

    

    const handleDecrease = () => {
      if(quantity === 1) {
        return
      } {
        setQuantity(prev => prev - 1)
        setTotalAmount(prev => prev = prev - parseFloat(data?.prod_price))
      }
    }

    const handleIncrease = () => {
      if(quantity === 8) {
        return
      } {
        setQuantity(prev => prev + 1)
        setTotalAmount(prev => prev = prev + parseFloat(data?.prod_price))
      }
    }
    
    return (
        <div className="cartItem">
          <img src={data?.images[0].files} />
          <div className="description">
            <p>
              <b>{data.product_name}</b>
            </p>
            <p> ფასი: {data.prod_price} ლარი</p>
            <div className="countHandler">
              <button onClick={handleDecrease}> - </button>
              <p>{quantity}</p>
              <button onClick={handleIncrease}> + </button>
            </div>
          </div>
        </div>
      );
}