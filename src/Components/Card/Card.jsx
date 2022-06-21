import React from 'react';
import { Link } from 'react-router-dom';
import './card.scss';
import Trash from './bin.png';
import axios from 'axios';
import Count from './Count';
import HeadTop from '../Header/Top_logo/HeadTop';


export default function Card() {
  const [cart, setCart] = React.useState([]);
  const [deletId, setDeletId] = React.useState('');

 const resultsum = cart.map((item) => parseInt(item.price));
 const sum = resultsum.reduce((acc, cur) => acc + cur, 0);

  React.useEffect(() => {
    async function getCart() {
      const cartData = await axios.get(
        `https://62b04087b0a980a2ef4e882c.mockapi.io/cart`
      );

      setCart(cartData.data)
    }

      getCart();
  }, [deletId]);
  

  const deleteItem = async (id) => {
    
    await axios.delete(`https://62b04087b0a980a2ef4e882c.mockapi.io/cart/${id}`);
    setDeletId(id);
  };

  const deleteItemAll = async () => {
    cart.map(async (item) => {
      await axios.delete(
        `https://62b04087b0a980a2ef4e882c.mockapi.io/cart/${item.id}`
      );
    });

    setCart([]);
  };

  return (
    <>
      <HeadTop />
      <div className="cart_head">
        <div className="head_title">
          <Link className="back_home" to="/">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="30px"
              width="30px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"></path>
            </svg>
            назад на главный
          </Link>
          <h1>Корзина</h1>
        </div>
        <div className="product_lists">
          {cart.map((item, index) => {
            return (
              <div key={item.id} className="product_list">
                <img src={item.imgPath} alt={item.name} />
                <div className="product_over_title">
                  <div className="title">
                    <h3>{item.name}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                  <Count />
                  <div className="price">{item.price} сум</div>

                  <div className="trash">
                    <img
                      onClick={() => deleteItem(item.id)}
                      src={Trash}
                      alt="Trash"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="sum_product">
          <p> Итого: {sum} 000 Сум</p>
          <button onClick={() => deleteItemAll()}>Заказать</button>
        </div>
        <div className="empty"></div>
      </div>
    </>
  );
}
