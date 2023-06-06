import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './components/Greeting'
import { Provider } from 'react-redux';
import store from './redux/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Greeting />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);