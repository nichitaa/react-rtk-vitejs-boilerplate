import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { decrement, increment, incrementBy } from "../feature/counter/counter-slice";

export const Counter = () => {
  const { value } = useAppSelector(s => s.counter);
  const dispatch = useAppDispatch();

  const _increment = () => dispatch(increment());
  const _decrement = () => dispatch(decrement());
  const _incrementBy = () => dispatch(incrementBy(10));

  return <>
    {value} <br />
    <button onClick={_increment}>increment</button>
    <button onClick={_decrement}>decrement</button>
    <button onClick={_incrementBy}>increment by 10</button>
  </>;
};