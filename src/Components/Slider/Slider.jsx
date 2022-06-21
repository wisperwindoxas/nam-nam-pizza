import React from 'react';
import './style_slider.scss';
import { Carousel } from '@trendyol-js/react-carousel';
import Modal from '../Popup/Modal';

export default function Slider({item}) {
 
  const [id, setId]  = React.useState()
  const [isClose, setIsClose] = React.useState(false)
 
  const getId = (id) => {
    setIsClose(!isClose)
    setId(id);
  
   

  }
  return (
    <div className="slider">
      {isClose ? (
        <Modal setIsClose={setIsClose} isClose={isClose} id={id} href="pizza" />
      ) : (
        ''
      )}
      <Carousel show={5} slide={1} transition={0.5} swiping={true}>
        {item.map((item) => {
          return (
            <div
              key={item.name}
              onClick={() => getId(item.id)}
              className="slider_item"
            >
              <img src={item.imgPath} alt={item.name} />
            </div>
          );
        })}
      </Carousel>
      <div className="price_slider">
        {/* <Carousel show={4} slide={1} transition={0.5} swiping={true}>
          {pizza.map((item) => {
            return (
              <div
                key={item.id}
                className="slider_price"
                
              >
                <img src={item.photo} alt="" />
                <div className="title_price">
                  <h2>{item.name}</h2>
                  <p>{item.price}</p>
                </div>
              </div>
            );
          })}
        </Carousel> */}
      </div>
    </div>
  );
}
