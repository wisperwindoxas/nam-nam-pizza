import React from 'react'

export default function Count () {
	const [count, setCount] = React.useState(1);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count === 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div className="add_product_btn">
      <button onClick={() => increment()}>+</button>
      <span>{count}</span>
      <button onClick={() => decrement()}>-</button>
    </div>
  );
}
