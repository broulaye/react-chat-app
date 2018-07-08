import React, { Component } from 'react';
import './index.css';

class ChatContainer extends Component {


  render() {
    return (
      <div className="chat-container">
        <div className="chat-container-header">
          <button type="button" className="chat-list-button" onClick={this.props.openNav}>Toggle</button>
        </div>
        <div className="chat-container-content" onClick={this.props.closeNav}></div>
      </div>
    );
  }
}

export default ChatContainer;
