import { Action } from "redux";
import { LoadingState, TagsState } from "./contracts/contracts";

export enum TagsActionsType {
    SET_TAGS = 'tags/SET_TAGS',
    GET_TAGS = "tags/GET_TAGS",
    SET_LOADING_STATE = 'tags/SET_LOADING_STATE'
}

export interface SetTagsActionInterface extends Action<TagsActionsType> {
    type: TagsActionsType.SET_TAGS,
    payload: TagsState['items']
}

export interface GetTagsActionInterface extends Action<TagsActionsType> {
    type: TagsActionsType.GET_TAGS
}

export interface SetTagsLoadingActionInterface extends Action<TagsActionsType> {
    type: TagsActionsType.SET_LOADING_STATE,
    payload: LoadingState
}

export const setTags = (payload: TagsState['items']): SetTagsActionInterface => ({
    type: TagsActionsType.SET_TAGS,
    payload
})

export const setTagsLoadingState = (payload: LoadingState): SetTagsLoadingActionInterface => ({
    type: TagsActionsType.SET_LOADING_STATE,
    payload
})

export const getTags = (): GetTagsActionInterface => ({
    type: TagsActionsType.GET_TAGS
})

export type TagsAction =
    SetTagsActionInterface |
    GetTagsActionInterface |
    SetTagsLoadingActionInterface;
