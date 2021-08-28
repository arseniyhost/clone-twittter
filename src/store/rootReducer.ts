import { combineReducers } from "redux";
import { tweetsReducer } from "./ducks/tweets/reducer";
import { tagsReducer } from "./ducks/tags/reducer";
import { tweetDataReducer } from "./ducks/tweetData/reducer";

export const rootReducer = combineReducers({
    tweets: tweetsReducer,
    tweet: tweetDataReducer,
    tags: tagsReducer
})
