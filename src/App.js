import React from 'react';
import { BackTop } from 'antd';
import CssTable from './components/CssTable';
import Header from './components/Header';

const App = () => (
  <div className="app">
    <Header/>
    <CssTable/>
    <BackTop></BackTop>
  </div>
);

export default App;