import React, { Component } from 'react';
import '../styles/App.css';
import BaseLayout from '../components/BaseLayout.js'
import ParentComponent from '../components/ParentComponent.js'
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout>
        <ParentComponent />
        </BaseLayout>
        </div>
    );
  }
}

export default App;
