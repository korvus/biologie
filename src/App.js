// import logo from './logo.svg';
import './style/App.css';
import Menu from './menu.js';
import React, { useState } from 'react';
import { PageContext, arrPages } from './context.js';

function App() {

  const [pageindex, setPageindex] = useState(0);

  return (
    <PageContext.Provider value={{pageindex, setPageindex}}>
      <div className="app">
        <Menu />
        <section className="pages">
          {React.createElement(arrPages[pageindex])}
        </section>
      </div>
    </PageContext.Provider>
  );
}

export default App;
