import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import AllRoutes from './routes';

import 'resources/styles/styles.css';

import { Provider } from 'react-redux';
import ReduxStore from './store';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={ReduxStore()}>
//       <AllRoutes />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );



const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
  <React.StrictMode>
    <Provider store={ReduxStore()}>
      <AllRoutes />
    </Provider>
  </React.StrictMode>
);