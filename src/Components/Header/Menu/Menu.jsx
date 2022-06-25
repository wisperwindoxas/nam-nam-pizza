import React from 'react'
import '../style.scss'
import {Link as Links} from 'react-router-dom'
import {Link} from 'react-scroll'
import axios from 'axios';






export default function Menu({update}) {
   
  const [scroll, setScroll] = React.useState(false)
  const [cart, setCart] =React.useState([])
  
  React.useEffect(() => {
    async function fetchData(){
      const cartData = await axios.get(
        `https://62b04087b0a980a2ef4e882c.mockapi.io/cart`
      );

      setCart(cartData.data)
    }

    fetchData()
}, [update])


  React.useEffect(() => {


    function handleScroll (){
      if(window.scrollY > 70){
        setScroll(true)
        
      }else{
        setScroll(false)
      }
    }
    window.addEventListener('scroll', handleScroll);
  }, [scroll])




  return (
    <div
      
      className={scroll ? 'menu_fixed menu' : 'menu'}
    >
      <div className="list_menu">
        <ul>
          <li>{scroll ? <img src="/pizza.png" alt="" /> : ""}</li>
          <Link to={'pizza'} smooth={true} duration={1000}>
            <li>Пицца</li>
          </Link>
          <Link to={'combo'} smooth={true} duration={1000}>
            <li>Комбо</li>
          </Link>

          <Link to={'snacks'} smooth={true} duration={1000}>
            <li>Закуски</li>
          </Link>

          <Link to={'desert'} smooth={true} duration={1000}>
            <li>Десерты</li>
          </Link>

          <Link to={'drink'} smooth={true} duration={1000}>
            <li>Напитки</li>
          </Link>
          <li>Акции</li>
          <li>Контакты</li>
          <li>Франшиза</li>
          <li>О нас</li>
        </ul>
      </div>

      <div className="card">
        <Links to={'/card'}>
          <button className="card"><p>Корзина</p> <span className='cartCount'>{cart.length}</span></button>
        </Links>
      </div>
    </div>
  );
}
