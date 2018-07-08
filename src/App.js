import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {sidebarOpen: false};

    // This binding is necessary to make `this` work in the callback
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  openNav() {
    console.log('opening Nav');
    // debugger
    // document.getElementsByClassName("chat-sidebar")[0].style.width = "25%";
    const open = this.state.sidebarOpen;
    this.setState({ sidebarOpen: !open });
  }

  closeNav() {
    console.log('closing Nav');
    this.setState({ sidebarOpen: false })
  }


  render() {
    return (
      <div className="App">
        <div className="chat-root">
          <div className="chat-sidebar" sidebar-open={this.state.sidebarOpen.toString()}>
            <div className="chat-sidebar-header"></div>
          </div>
          <div className="chat-container">
            <div className="chat-container-header">
              <button type="button" className="chat-list-button" onClick={this.openNav}>Toggle</button>
            </div>
            <div className="chat-container-content" onClick={this.closeNav}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
