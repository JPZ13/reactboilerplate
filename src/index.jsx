import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader/root'
import { Provider } from 'react-redux'

import App from './components/App';
import store from 'state'

const DevApp = hot(() => (
  <Provider store={store}>
    <App/>
  </Provider>
));

render(<DevApp/>, document.getElementById( 'root' ));
