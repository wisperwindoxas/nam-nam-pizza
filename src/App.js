import React from 'react';
import './App.css';
import Menu from './Components/Header/Menu/Menu';
import HeadTop from './Components/Header/Top_logo/HeadTop';
import Product from './Components/Products/Product';
import Slider from './Components/Slider/Slider';
import { Routes, Route } from 'react-router-dom';
import Card from './Components/Card/Card';
import database from './Components/firebase/firebase.config'
import {ref, onValue} from "firebase/database";



function App() {


  const [pizza, setPizza] = React.useState([]);
  const [combo, setCombo] = React.useState([]);
  const [snackbar, setSnackbar] = React.useState([]);
  const [desert, setDesert] = React.useState([]);
  const [drink, setDrink] = React.useState([]);

  React.useEffect(() => {
 
}, [])

  React.useEffect(() => {
    async function fetchData() {
       const pizza = ref(database, 'pizza');
        onValue(pizza, (snapshot) => {
        const data = snapshot.val();
        setPizza(data);
    });
        const combo = ref(database, 'combo');
        onValue(combo, (snapshot) => {
          const data = snapshot.val();
          setCombo(data);
        })
         const snacks = ref(database, 'snacks');
        onValue(snacks, (snapshot) => {
          const data = snapshot.val();
          setSnackbar(data);
        })
         const desert = ref(database, 'desert');
        onValue(desert, (snapshot) => {
          const data = snapshot.val();
          setDesert(data);
        })
         const drink = ref(database, 'drink');
        onValue(drink, (snapshot) => {
          const data = snapshot.val();
          setDrink(data);
        })

      
    }

    fetchData();
  }, []);

  function Home() {
    return (
      <>
        <HeadTop />
        <Menu />
        <Slider item={pizza} />
        <Product scroll="pizza" href="pizza" nameProduct="Пицца" item={pizza} />
        <Product scroll="combo" href="combo" nameProduct="Комбо" item={combo} />
        <Product
          scroll="snacks"
          hide="none"
          href="snacks"
          nameProduct="Закуски"
          item={snackbar}
        />
        <Product
          scroll="desert"
          hide="none"
          href="desert"
          nameProduct="Десерты"
          item={desert}
        />
        <Product
          scroll="drink"
          hide="none"
          href="drink"
          nameProduct="Напитки"
          item={drink}
        />
      </>
    );
  }


  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} excat />
          <Route path="/card" element={<Card />} excat />
        </Routes>
      </div>
    </div>
  );
}

export default App;
