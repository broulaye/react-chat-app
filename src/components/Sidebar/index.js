import React, { Component } from 'react';
import './index.css';

class Sidebar extends Component {


  render() {
    return (
      <div className="chat-sidebar" sidebar-open={this.props.sidebarOpen}>
        <div className="chat-sidebar-header"></div>
      </div>
    );
  }
}

export default Sidebar;
