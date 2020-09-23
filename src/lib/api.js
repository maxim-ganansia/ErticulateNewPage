import axios from 'axios';


const baseUrl = 'https://fullstack-web-course.ew.r.appspot.com/';


function getTweet() {
return axios.get(`${baseUrl}/tweet`)
}


function postTweet(tweet){
return axios.post(`${baseUrl}/tweet`, tweet)
}

export {getTweet, postTweet}