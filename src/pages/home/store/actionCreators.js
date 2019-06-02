import axios from 'axios'
import * as constants from './constants';
import { fromJS } from 'immutable';

const changHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  TopicList: result.TopicList,
  List: result.List,
  writerList: result.writerList
})

const addHomeList = (list) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list)
})

export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then((res) => {
			const result = res.data.data;
			dispatch(changHomeData(result));
		})
	}
}

export const getMoreList = () => {
  return (dispatch) => {
    axios.get('/api/homeList.json').then((res) => {
			const result = res.data.data;
			dispatch(addHomeList(result));
		})
  }
}

export const toggleTopShow= (show) => ({
  type: constants.TOGGLE_TOP_SHOW,
  show
})