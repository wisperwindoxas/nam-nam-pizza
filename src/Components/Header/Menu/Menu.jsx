import React from 'react'
import '../style.scss'
import {Link as Links} from 'react-router-dom'
import {Link} from 'react-scroll'







export default function Menu() {
   
  const [scroll, setScroll] = React.useState(false)

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
          <button className="card">Корзина</button>
        </Links>
      </div>
    </div>
  );
}
