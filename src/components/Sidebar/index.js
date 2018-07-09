import React, { Component } from 'react';
import './index.css';

class Sidebar extends Component {


  render() {
    return (
      <div className="chat-sidebar" sidebar-open={this.props.sidebarOpen}>
        <div className="chat-sidebar-header">
          <img src="https://avatars1.githubusercontent.com/u/13936493?v=4" alt="broulayedoumbia"/>
          <div className="user-name">
            <h3>Broulaye Doumbia</h3>
            <h5>@broulaye</h5>
          </div>
        </div>
        <div className="chat-sidebar-footer">
          <h1>Footer</h1>
        </div>
      </div>
    );
  }
}

export default Sidebar;
