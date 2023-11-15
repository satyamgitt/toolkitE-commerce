import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'




const Cart = () => {

    const cartData = useSelector((data)=>data.cart)
    const dispatch = useDispatch()
    console.log("9", cartData);




    const handleRemove = (id)=>{
        dispatch(remove(id))
    }

    return (
        <div>
            <h3>Cart</h3>
            <div className="cartWrapper">
                {cartData.map((product) => (
                    <div key={product.id} className="cartCard">
                        <img src={product.image} alt="" />
                        <h5>{product.title}</h5>
                        <h5>{product.price}</h5>
                        <button
                            className="btn"
                            onClick={() => handleRemove(product.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cart