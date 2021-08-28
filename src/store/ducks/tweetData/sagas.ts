import { call, put, takeLatest } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { Tweet } from '../tweets/contracts/contracts';
import { GetTweetDataActionInterface, setTweetData, setTweetLoadingState, TweetDataActionsType } from './actionCreators';
import { LoadingState } from './contracts/contracts';


export function* fetchTweetDataRequest({ payload: tweetId }: GetTweetDataActionInterface) {
  try {
    const data: Tweet[] = yield call(TweetsApi.fetchTweetData, tweetId);

    yield put(setTweetData(data[0]));
  } catch (error) {
    yield put(setTweetLoadingState(LoadingState.ERROR));
  }
}

export function* tweetDataSaga() {
  yield takeLatest(TweetDataActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest);
}
