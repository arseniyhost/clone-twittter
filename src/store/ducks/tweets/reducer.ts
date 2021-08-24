import produce, { Draft } from 'immer';
import { TweetActionsType, TweetsAction } from './actionCreators';
import { LoadingState, TweetsState } from './contracts/contracts';

const initialTweetsState: TweetsState = {
    items: [],
    loadingState: LoadingState.NEVER,
};

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsAction) => {
    switch (action.type) {
        case TweetActionsType.SET_TWEETS:
            draft.items = action.payload;
            draft.loadingState = LoadingState.LOADED;
            break;

        case TweetActionsType.GET_TWEETS:
            draft.items = [];
            draft.loadingState = LoadingState.LOADING;
            break;

        case TweetActionsType.SET_LOADING_STATE:
            draft.loadingState = action.payload;
            break;

        default:
            break;
    }
}, initialTweetsState);
