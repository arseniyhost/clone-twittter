import produce, { Draft } from 'immer';
import { TagsAction, TagsActionsType } from './actionCreators';
import { LoadingState, TagsState } from './contracts/contracts';

const initialTagsState: TagsState = {
    items: [],
    loadingState: LoadingState.NEVER,
};

export const tagsReducer = produce((draft: Draft<TagsState>, action: TagsAction) => {
    switch (action.type) {
        case TagsActionsType.SET_TAGS:
            draft.items = action.payload;
            draft.loadingState = LoadingState.LOADED;
            break;

        case TagsActionsType.GET_TAGS:
            draft.items = [];
            draft.loadingState = LoadingState.LOADING;
            break;

        case TagsActionsType.SET_LOADING_STATE:
            draft.loadingState = action.payload;
            break;

        default:
            break;
    }
}, initialTagsState);
