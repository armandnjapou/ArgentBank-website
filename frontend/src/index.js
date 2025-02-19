import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './designs/css/main.css';
import HomePage from './pages/HomePage';
import 'font-awesome/css/font-awesome.min.css';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import SignInPage from './pages/SignInPage';
import ProfilePage from './pages/ProfilePage';

const container = document.getElementById('root');
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/sign-in",
    element: <SignInPage />
  },
  {
    path: "/profile",
    element: <ProfilePage />
  }
])

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
