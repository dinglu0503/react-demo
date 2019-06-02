// import * as constants from './constants'
import { fromJS } from 'immutable'
import * as constants from './constants';

const defaultState = fromJS({
  topicList: [],
  List:[],
  writerList:[],
  articlePage: 1,
  showScroll: false
});

const changeHomeData = (state, action) => {
  return state.merge({
    topList: fromJS(action.topicList),
    List: fromJS(action.List),
    writerList: fromJS(action.writerList)
  })
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action);
    case constants.ADD_ARTICLE_LIST:
      return state.set('List', state.get('List').concat(action.list))
    case constants.TOGGLE_TOP_SHOW:
      return state.set('showScroll', action.show)
    default:
      return state;
  }
}