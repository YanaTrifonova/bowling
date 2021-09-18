import React from 'react';
import {Provider} from 'react-redux';
import Header from './Components/Header/index.jsx';
import store from "./store";
import Main from "./Components/Main";

export default function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Main/>
    </Provider>
  );
}
