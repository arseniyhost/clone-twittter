import { Action } from "redux";
import { LoadingState, TweetsState } from "./contracts/contracts";

export enum TweetActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    GET_TWEETS = "tweets/GET_TWEETS",
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE'
}

export interface SetTweetsActionInterface extends Action<TweetActionsType> {
    type: TweetActionsType.SET_TWEETS,
    payload: TweetsState['items']
}

export interface GetTweetsActionInterface extends Action<TweetActionsType> {
    type: TweetActionsType.GET_TWEETS
}

export interface SetTweetsLoadingActionInterface extends Action<TweetActionsType> {
    type: TweetActionsType.SET_LOADING_STATE,
    payload: LoadingState
}

export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
    type: TweetActionsType.SET_TWEETS,
    payload
})

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingActionInterface => ({
    type: TweetActionsType.SET_LOADING_STATE,
    payload
})

export const getTweets = (): GetTweetsActionInterface => ({
    type: TweetActionsType.GET_TWEETS
})

export type TweetsAction =
    SetTweetsActionInterface |
    GetTweetsActionInterface |
    SetTweetsLoadingActionInterface;
