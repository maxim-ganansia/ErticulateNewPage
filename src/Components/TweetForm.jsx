import React from "react";
import { postTweet } from "../lib/api"
import MyTweetContext from "../lib/context"

class TweetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleSubmit = (event, addToTweetList) => {
    event.preventDefault();
    const saveNewName = localStorage.getItem("userName");
    const userName = JSON.parse(saveNewName)
    const tweet = {
      userName: userName,
      content: this.state.value,
      date: new Date().toISOString()
    }
    addToTweetList(tweet)
    postTweet(tweet)
  }

  render() {
    return (
      <MyTweetContext.Consumer>
        {({ addToTweetList }) => (
          <form className="input-case">
            <input
              placeholder="What you have in mind..."
              className="type-case"
              type="text"
              value={this.state.value}
              onChange={(event) => this.handleChange(event)}
            />
            <button
              disabled={this.state.value.length > 140}
              type="submit"
              className="twitter-submit-button"
              onClick={(event) => { this.handleSubmit(event, addToTweetList) }}
            >
              <i class="fas fa-paper-plane"></i>
            </button>
          </form>
        )}
      </MyTweetContext.Consumer>
    );
  }
}

export default TweetForm;