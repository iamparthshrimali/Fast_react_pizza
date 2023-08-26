import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';
import EmptyCart from "./EmptyCart"

function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector(state => state.user.username)
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <div className='flex items-center mt-7 gap-[40%] pr-[20px] '>

        <h2 className=" text-xl font-semibold">Your cart {username}</h2>
        <div style={{
          "width": "28%",
          "display": "flex",
          "justifyContent": "space-between",
          alignItems:"center"
        }}>
          <h2 className=" text-xl font-semibold">Price</h2>
          <h2 className=" text-xl font-semibold">Total <br /> Price</h2>
        </div>
      </div>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.key} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button type="secondary" onClick={() => dispatch(clearCart())}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
