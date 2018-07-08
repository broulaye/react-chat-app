import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import ChatContainer from './components/ChatContainer';

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
          <Sidebar sidebarOpen={this.state.sidebarOpen.toString()}/>
          <ChatContainer openNav={this.openNav} closeNav={this.closeNav}/>
        </div>
      </div>
    );
  }
}

export default App;
