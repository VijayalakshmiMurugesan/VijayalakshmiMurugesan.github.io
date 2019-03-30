import React, { Component } from 'react';
import './App.css';

import PageTube from './ui/page/page_tube/page_tube.js';
import Header from './ui/header/header.js';
import Footer from './ui/footer/footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PageTube
          type="Latest Music Videos"
        />
        <PageTube
          type="Latest Music Videos"
        />
        <Footer />
      </div>
    );
  }
}

export default App;
