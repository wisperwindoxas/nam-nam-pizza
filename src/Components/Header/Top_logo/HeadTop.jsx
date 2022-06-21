import React from 'react';
import '../style.scss';

export default function Head_top() {
  return (
    <div className={'head_top'}>
      <div className="logo">
        <div className="logo_title">
          <img src="/pizza.png" alt="" />
          <div className="title">
            <h2>Нам Нам Пицца</h2>
            <p>Мы предлагаем вам лучшие пиццы в городе</p>
          </div>
        </div>

        <div className="dilever">
          <p>
            Доставка пиццы <span>Ташкент</span>
          </p>
          <p>45 мин </p>
        </div>
        <div className="phone">
          <a href="tel:+998332575767">+998(33)257-57-67</a>
          <p>Звонок бесплатный</p>
        </div>
      </div>

      <div className="sign">
        <button>Войти</button>
      </div>
    </div>
  );
}
