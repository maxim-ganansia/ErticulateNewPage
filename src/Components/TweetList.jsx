import React from "react";
import MyTweetContext from "../lib/context"


class TweetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <MyTweetContext.Consumer>
        {({loading , TweetList})=>(
          <>
          {!loading && 
          <div className="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>}
          {loading && 
              <ul>
                {TweetList.map((item, index) => (
                  <div
                    className="tweet-box"
                    key={index}
                  >
                    <div>
                      <span className="username-tweet">{item.userName} </span>
                      <span className="date-tweet">{item.date}</span>
                    </div>
                    <span className="text-tweet">{item.content} </span>
                  </div>
                ))}
              </ul>
          }
          </>
        )}
      </MyTweetContext.Consumer>
    );
  }
}

export default TweetList;