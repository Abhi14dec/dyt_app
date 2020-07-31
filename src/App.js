import React from 'react';

import DisplayPicture from './DisplayPictures/DisplayPicture';
import Product from './Product/Product';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div>
      <Sidebar />
      <header className="App-header">
        <div>
          <div class="d-flex">
            <div className="p-2"><h3>DYT</h3></div>
            <div className="mr-auto p-2"><i className="fa fa-heart" aria-hidden="true" style={{ color: "#e6005c", marginLeft:'-15px', fontSize:'12px' }}></i></div>
            <div className="p-2"  style={{ color: '#e6005c' }}><i className="fa fa-question-circle-o mr-1" aria-hidden="true"></i>Help & Support</div>
            <div className="p-2"><i className="fa fa-bell-o" aria-hidden="true"></i></div>
            <div className="p-2">Abhinav Kumar</div>
            <div className="p-2"><i className="fa fa-user-circle-o" aria-hidden="true"></i></div>
            <div className="p-2"><i className="fa fa-sign-out" aria-hidden="true" style={{ color: '#e6005c' }}></i></div>
          </div>
        </div>
        <br />
        <Product />
        <br />
        <DisplayPicture />
      </header>
    </div>
  );
}

export default App;
