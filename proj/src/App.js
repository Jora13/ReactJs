import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import MessageField from './components/MessageField';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <>
      <section className="messanger">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Header text="Шапка" />
            </div>
          </div>
        </div>
      </section>
      <section className="messanger">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Sidebar />
            </div>

            <div className="col-md-8">
              <MessageField />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default App;
