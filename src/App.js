import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';

import Count from './views/Count';

function App() {
  return (
    <Provider store={store}>
      <Count />
    </Provider>
  );
}

export default App;
