import React from 'react'
import { useDispatch } from 'react-redux'
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice'

const UpdateQuantity = ({pizzaId}) => {
//   const itemCurrentQuantity=useSelector(getItemQuantityById(pizzaId))
const dispatch=useDispatch(increaseItemQuantity(pizzaId))
  return (
    <div>
        <div className="increment cursor-pointer text-xl"  onClick={()=>dispatch(increaseItemQuantity(pizzaId))}>+</div>
        <div className="decrement cursor-pointer text-xl" onClick={()=>dispatch(decreaseItemQuantity(pizzaId))}>-</div>
    </div>
  )
}

export default UpdateQuantity