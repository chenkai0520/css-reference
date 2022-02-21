import { useState } from 'react';
import { BackTop } from 'antd';
import CssTable from './components/CssTable';
import Header from './components/Header';

const App = () => {
  const [ search, setSearch ] = useState('');
  return (
    <div className="app">
      <Header setSearch={setSearch} />
      <CssTable search={search}/>
      <BackTop></BackTop>
    </div>
  )
};

export default App;