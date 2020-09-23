import React from "react";


const MyTweetContext = React.createContext({
    TweetList: [],
    loading: false,
    addToTweetList: ()=>{}
})

export default MyTweetContext