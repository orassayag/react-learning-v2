import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from './store/ui-slice';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const { cartIsVisible, notification } = useSelector(state => state.ui);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!'
      }));
      const response = await fetch('https://react-http-6b4a6.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      });
      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!'
      }));
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch(error => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: error.message
      }));
    });
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && <Notification
        status={notification.status}
        title={notification.title}
        message={notification.message}
      />}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
