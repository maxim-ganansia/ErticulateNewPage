import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import logo from '../Moi.png'


class ChatBox extends Component {
  componentDidMount() {
    addResponseMessage("Hey do you have any questions ?");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  }

  render() {
    return (
      <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title="Chat with your Mentor"
          subtitle="Maxim-ilan Gnansia"
        />
      </div>
    );
  } 
}

export default ChatBox;