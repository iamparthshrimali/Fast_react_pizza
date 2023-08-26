import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteItem } from './cartSlice'
import Button from '../../ui/Button';

const DeleteItem = ({ pizzaId }) => {
    const dispatch = useDispatch();
    //github
    return <Button type="primary" onClick={() => dispatch(deleteItem(pizzaId))}>Delete</Button>
}

export default DeleteItem