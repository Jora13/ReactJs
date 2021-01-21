import React from 'react'
import './App.css';
import MessageField from './components/MessageField';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
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
  );
}

export default App;
