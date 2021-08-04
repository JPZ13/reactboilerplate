import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader/root'

import App from './components/App';

const DevApp = hot(() => <App />);

render(<DevApp/>, document.getElementById( 'root' ));
