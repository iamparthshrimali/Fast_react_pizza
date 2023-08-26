import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { deleteItem } from './cartSlice';
import UpdateQuantity from './UpdateQuantity';

function CartItem({ item }) {
  const { pizzaId, name, quantity, unitPrice, totalPrice } = item;
  const dispatch = useDispatch();

  if (quantity < 1) dispatch(deleteItem(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between ">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <p className="mb-1 sm:mb-0" style={{
        "flex": "1",
        "display": "flex",
        "justifyContent": "flex-end",
        "paddingRight": "100px"
      }}>
        {unitPrice}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateQuantity pizzaId={pizzaId} />
        <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))} >Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
