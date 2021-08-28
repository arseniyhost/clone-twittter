import { Action } from "redux";
import { LoadingState, TweetState } from "./contracts/contracts";

export enum TweetDataActionsType {
    SET_TWEET_DATA = 'tweet/SET_TWEET_DATA',
    FETCH_TWEET_DATA = "tweet/FETCH_TWEET_DATA",
    SET_LOADING_STATE = 'tweet/SET_LOADING_STATE'
}

export interface SetTweetDataActionInterface extends Action<TweetDataActionsType> {
    type: TweetDataActionsType.SET_TWEET_DATA,
    payload: TweetState['data']
}

export interface GetTweetDataActionInterface extends Action<TweetDataActionsType> {
    type: TweetDataActionsType.FETCH_TWEET_DATA,
    payload: string
}

export interface SetTweetDataLoadingActionInterface extends Action<TweetDataActionsType> {
    type: TweetDataActionsType.SET_LOADING_STATE,
    payload: LoadingState
}

export const setTweetData = (payload: TweetState['data']): SetTweetDataActionInterface => ({
    type: TweetDataActionsType.SET_TWEET_DATA,
    payload
})

export const setTweetLoadingState = (payload: LoadingState): SetTweetDataLoadingActionInterface => ({
    type: TweetDataActionsType.SET_LOADING_STATE,
    payload
})

export const getTweetData = (payload: string): GetTweetDataActionInterface => ({
    type: TweetDataActionsType.FETCH_TWEET_DATA,
    payload,
})

export type TweetDataAction =
    SetTweetDataActionInterface |
    GetTweetDataActionInterface |
    SetTweetDataLoadingActionInterface;
