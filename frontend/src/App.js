import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Product from './components/Product';



function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">Segurito</a>
        </div>
        <div>
          <a href="/cart">Carrito</a>
          <a href="/signin">Ingresa</a>
        </div>
      </header>
      <main>
        <Route path='/product/:id' component={ProductScreen}></Route>
        <Route path='/' component={HomeScreen}></Route>
      
      </main>
      <footer className="row center">
       Matias Selman K

      </footer>

    </div>
    </BrowserRouter>
  );
}

export default App;
