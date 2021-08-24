import { createSelector } from "reselect";
import { RootState } from "../../store";
import { LoadingState, TweetsState } from "./contracts/contracts";

export const selectTweets = (state: RootState) : TweetsState => state.tweets

export const selectorLoadingState = (state: RootState) : LoadingState => selectTweets(state).loadingState;

export const selectIsTweetsLoading = (state: RootState) : boolean => selectorLoadingState(state) === LoadingState.LOADING;

export const selectIsTweetsLoaded = (state: RootState) : boolean => selectorLoadingState(state) === LoadingState.LOADED;

export const selectTweetsItems = createSelector(selectTweets, tweets => tweets.items)
