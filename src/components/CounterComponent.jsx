import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../redux/features/counterSlice';

function CounterComponent() {
    const count = useSelector((state) => state.counter.value); 
    const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux Counter</h2>
      <p>Giá trị hiện tại: {count}</p>
      <button onClick={() => dispatch(increment())}>
        Tăng (+) 
      </button>
      <button onClick={() => dispatch(decrement())}>
        Giảm (-) 
      </button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Tăng thêm 5 
      </button>
    </div>
  )
}

export default CounterComponent
