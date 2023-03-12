import Header from './components/Layout/Header';
import React,{Fragment} from 'react';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Fragment>
      <Cart/>
     <Header/>
     <main>
      <Meals/>
     </main>
     </Fragment>
  );
}

export default App;
