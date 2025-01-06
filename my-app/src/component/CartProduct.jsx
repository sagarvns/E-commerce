import React, { useContext } from 'react';
import { CartContext } from '../Features/ContextProvider';




const CartProduct = ({product}) => {
  const {cart,dispatch}=useContext(CartContext);

  const Increase=(id)=>{
    const Index=cart.findIndex(p=>p.id===id)
    if(cart[Index].quantity<10){
      dispatch({type:'Increase',id})
    }

  }
  const Decrease=(id)=>{
    const Index=cart.findIndex(p=>p.id===id)
    if(cart[Index].quantity>1){
      dispatch({type:'Decrease',id})
    }

  }
  return (
    <div className='d-flex border mb-5  border border-danger p-3'>
      <img src={product.thumbnail}  className='w-30 h-50'/>
      <div className="detail">
        <h4>{product.title}</h4>
        <h5>${product.price}</h5>
        <div className="buttons ms-3">
          <button className='raunded-cricle px-2 mt-4   border-3 rounded-pill' onClick={()=>Decrease(product.id)}><b>-</b></button>
          <button className="raunded mt-2">{product.quantity}</button>
          <button className="raunded-cricle px-2 mt-10  border-3 rounded-pill" onClick={()=>Increase(product.id)}><b>+</b></button>
        </div>
        <button className='btn btn-sm btn-warning m-2' onClick={()=>dispatch({type:'Remove',id: product.id})}>Remove</button>
      </div>
      </div>

  )
}

export default CartProduct;