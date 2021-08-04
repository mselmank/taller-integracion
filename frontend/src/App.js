import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { singout } from './actions/userActions';
import RegisterScreen from './screens/RegisterScreen';




function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const singoutHandler = () => {
    dispatch(singout());
  }
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">Segurito</Link>
          </div>
          <div>
            <Link to="/cart">Carrito{cartItems.length > 0 && (
              <span className='badge'>{cartItems.length}</span>
            )}
            </Link>
            {
              userInfo ? (
                <div className='dropdown'>
                  <Link to="#">{userInfo.name}<i className='fa fa-caret-down'></i></Link>
                  <ul className='dropdown-content'>
                    <Link to='#signout' onClick={singoutHandler}>Cerrar sesión</Link>
                  </ul>
                </div>
              ) :
                (
                  <Link to="/signin"> Ingresa</Link>
                )}
          </div>
        </header>
        <main>
          <Route path='/cart/:id?' component={CartScreen}></Route>
          <Route path='/product/:id' component={ProductScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path='/' component={HomeScreen}></Route>



        </main>
        <footer className="row center">
          Desarrollado Mselmank
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
