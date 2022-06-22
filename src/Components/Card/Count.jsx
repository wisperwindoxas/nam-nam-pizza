import React from 'react'
import axios from 'axios'


export default function Count ({id, setUpdate,counts}) {
	const [count, setCount] = React.useState(1);

  const increment = () => {
    setCount(count + 1);
    axios.put(`https://62b04087b0a980a2ef4e882c.mockapi.io/cart/${id}`, {"count":count})
    setUpdate(count)
  };
  const decrement = () => {
    if (count === 1) {
      setCount(1);
    } else {
      setCount(count - 1);
      axios.put(`https://62b04087b0a980a2ef4e882c.mockapi.io/cart/${id}`, {"count":count})
      setUpdate(count)
    }
  };



  return (
    <div className="add_product_btn">
      <button onClick={() => increment()}>+</button>
      <span>{counts}</span>
      <button onClick={() => decrement()}>-</button>
    </div>
  );
}
