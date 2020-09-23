
import React from "react";
// import Navbar from "./Navbar";
import TweetForm from "./TweetForm"
import TweetList from "./TweetList"
import {getTweet} from "../lib/api"
import MyTweetContext from "../lib/context"

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TweetList: [],
      loading: false,
      errmessage: ""
    };
  }

  addToTweetList = (input) => {
    this.setState({ TweetList: [input, ...this.state.TweetList] });
  }

  componentDidMount(){
    getTweet().then(res => {
      this.setState({loading:true})
      const {data} = res;
      this.setState({TweetList: data.tweets});
    })
    .catch((errmessage) => {
      this.setState({errmessage: errmessage})
    })
  }

  render() {
    return (
      <div className="main-page">
        <MyTweetContext.Provider value = {{
          TweetList: this.state.TweetList,
          loading: this.state.loading,
          addToTweetList: (input) => {this.addToTweetList(input)}
        }}>
          <>
        {/* <Navbar /> */}
        <h1 className="chat-title">Chat</h1>
        <TweetForm></TweetForm>
        <TweetList></TweetList>
        </>
        </MyTweetContext.Provider>
      </div>
    );
  }
}

export default MainPage;