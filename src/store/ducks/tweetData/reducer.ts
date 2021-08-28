import produce, { Draft } from 'immer';
import { TweetDataAction, TweetDataActionsType } from './actionCreators';
import { LoadingState, TweetState } from './contracts/contracts';

const initialTweetsState: TweetState = {
    data: undefined,
    loadingState: LoadingState.NEVER,
};

export const tweetDataReducer = produce((draft: Draft<TweetState>, action: TweetDataAction) => {
    switch (action.type) {
        case TweetDataActionsType.SET_TWEET_DATA:
            draft.data = action.payload;
            draft.loadingState = LoadingState.LOADED;
            break;

        case TweetDataActionsType.FETCH_TWEET_DATA:
            draft.data = undefined;
            draft.loadingState = LoadingState.LOADING;
            break;

        case TweetDataActionsType.SET_LOADING_STATE:
            draft.loadingState = action.payload;
            break;

        default:
            break;
    }
}, initialTweetsState);
