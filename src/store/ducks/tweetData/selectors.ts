import { createSelector } from "reselect";
import { RootState } from "../../store";
import { LoadingState, TweetState } from "./contracts/contracts";

export const selectTweetData = (state: RootState) : TweetState => state.tweet

export const selectorTweetDataLoadingState = (state: RootState) : LoadingState => selectTweetData(state).loadingState;

export const selectIsTweetDataLoading = (state: RootState) : boolean => selectorTweetDataLoadingState(state) === LoadingState.LOADING;

export const selectIsTweetDataLoaded = (state: RootState) : boolean => selectorTweetDataLoadingState(state) === LoadingState.LOADED;

export const selectTweetsItems = (state: RootState): TweetState['data'] => selectTweetData(state).data
