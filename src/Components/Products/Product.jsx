import React from 'react';
import Modal from '../Popup/Modal';
import './product.scss';




export default function Product({ item, nameProduct, href, hide, scroll }) {
  const [isClose, setIsClose] = React.useState(false);
  const [id, setId] = React.useState();

  const getId = (id) => {
    setIsClose(!isClose);
    setId(id);
  };

 
  return (
    <>
      <h2 className="product_categories">{nameProduct}</h2>
      <div className="products">
        {item.map((product, index) => {
          return (
            <div
              className="product"
              onClick={() => getId(index)}
              key={product.id}
              id={scroll}
            >
              <img src={product.imgPath} alt="" />
              <div className="title_product">
                <h3>
                  {product.name}
                  
                </h3>
                <p>{product.subtitle}</p>
              </div>
              <div className="price_product">
                <p>{product.price} сум</p>
                <button>Выбрать</button>
              </div>
            </div>
          );
        })}
      </div>

      {isClose ? (
        <Modal
          hide={hide}
          href={href}
          setIsClose={setIsClose}
          isClose={isClose}
          id={id}
        />
      ) : (
        ''
      )}
    </>
  );
}
