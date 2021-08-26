import { createSelector } from "reselect";
import { RootState } from "../store";

import { LoadingState, TagsState } from "./contracts/contracts";

export const selectTags = (state: RootState) : TagsState => state.tags;

export const selectorLoadingState = (state: RootState) : LoadingState => selectTags(state).loadingState;

export const selectIsTagsLoading = (state: RootState) : boolean => selectorLoadingState(state) === LoadingState.LOADING;

export const selectIsTagsLoaded = (state: RootState) : boolean => selectorLoadingState(state) === LoadingState.LOADED;

export const selectTagsItems = createSelector(selectTags, tags => tags.items)
