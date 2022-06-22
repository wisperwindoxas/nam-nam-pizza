import React from 'react';
import './modal.scss';
import database from '../firebase/firebase.config';
import { ref, onValue } from 'firebase/database';
import axios from 'axios';

const pizza_product = [
  {
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAF71D07F4D',
    name: 'Сыр блю чиз',
    price: '12 000',
  },
  {
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/39f9871ade1c4c3ba39b62ae14825404.png',
    name: 'Чеддер и пармезан',
    price: '7 000',
  },
  {
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAED20AFD4B',
    name: 'Говядина',
    price: '8 000',
  },
  {
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAF34D3A25F',
    name: 'Пикантная пепперони',
    price: '9 000',
  },
  {
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAF50F6026F',
    name: 'Шампиньоны',
    price: '5 000',
  },
  {
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAED95FEBAA',
    name: 'Острый халапеньо',
    price: '4 000',
  },
  {
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAF25CA64B9',
    name: 'Ветчина',
    price: '7 000',
  },
  {
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9EA8A95AE1BD9',
    name: 'Соленые огурчики',
    price: '4 000',
  },
];
export default function Modal({ isClose, setIsClose, href, hide, id }) {
  const [checked, setChecked] = React.useState(false);
  const [selectSize, setSelelctSize] = React.useState('medium');
  const [sizePizza, setSizePizza] = React.useState(1);
  const [pizza, setPizza] = React.useState([]);
  const [cart, setCart]  = React.useState([]);

  React.useEffect(() => {
    const Product = ref(database, `${href}/${id}`);
    onValue(Product, (snapshot) => {
      const data = snapshot.val();
      setPizza(data);
    });

    async function getCartData(){
      const cartData = await axios.get('https://62b04087b0a980a2ef4e882c.mockapi.io/cart')
      setCart(cartData.data)
    }

    getCartData()

  }, [id, href]);


  const selectSizes = (e) => {
    if (e.target.dataset.size === 'small') {
      setSizePizza(0.9);
    }
    if (e.target.dataset.size === 'medium') {
      setSizePizza(1);
    }
    if (e.target.dataset.size === 'large') {
      setSizePizza(1.2);
    }
    setSelelctSize(e.target.dataset.size);
  };

  async function fetchDataPost() {
    
    if(cart.find(item => item.name === pizza.name)){
          return alert('Product alerdy add in cart')
    }else{
      await axios.post(
        `https://62b04087b0a980a2ef4e882c.mockapi.io/cart`,
        {
          id: pizza.id,
          imgPath: pizza.imgPath,
          name: pizza.name,
          title: pizza.subtitle,
          price: pizza.price,
          count:1
        }
      );
      setIsClose(false);
    }
  }

  return (
    <div
      style={isClose ? { height: '100%' } : { height: '0%' }}
      className="modal"
      onClick={() => setIsClose(false)}
    >
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <div onClick={() => setIsClose(false)} className="close">
          <svg
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="50px"
            height="50px"
          >
            <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
          </svg>
        </div>
        <div className="photo">
          <img
            style={{ transform: `scale(${sizePizza})` }}
            src={pizza.imgPath}
            alt=""
          />
        </div>
        <div className="pizza_about">
          <div className="pizza_info">
            <h2>{pizza.name}</h2>
            <p>{pizza.subtitle}</p>
            <div style={{ display: `${hide}` }} className="size">
              <button
                className="btn-size"
                style={
                  selectSize === 'small'
                    ? { backgroundColor: '#fff' }
                    : { backgroundColor: 'transparent' }
                }
                onClick={(e) => selectSizes(e)}
                data-size="small"
              >
                Маленькая
              </button>
              <button
                className="btn-size"
                style={
                  selectSize === 'medium'
                    ? { backgroundColor: '#fff' }
                    : { backgroundColor: 'transparent' }
                }
                onClick={(e) => selectSizes(e)}
                data-size="medium"
              >
                Средняя
              </button>
              <button
                className="btn-size"
                style={
                  selectSize === 'large'
                    ? { backgroundColor: '#fff' }
                    : { backgroundColor: 'transparent' }
                }
                onClick={(e) => selectSizes(e)}
                data-size="large"
              >
                Большая
              </button>
            </div>
            <div style={{ display: `${hide}` }} className="add_product">
              {pizza_product.map((product) => {
                return (
                  <div
                    onClick={() => setChecked(!checked)}
                    key={product.name}
                    className="product"
                    style={
                      checked ? { border: '1px solid red' } : { border: 'none' }
                    }
                  >
                    <img src={product.img} alt="" />
                    <h3>{product.name}</h3>
                    <p>{product.price} Сум</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="add_card">
            <button onClick={() => fetchDataPost()}>
              Добавить в корзина за {pizza.price} сум
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
