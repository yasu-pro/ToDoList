import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '../styles/tailwind.css';
import '../styles/global.css';


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
