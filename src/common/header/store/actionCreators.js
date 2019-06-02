import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

export const serachFocus = () => ({
  type: constants.SEARCH_FOCUS
})

export const serachBlur = () => ({
  type: constants.SEARCH_BLUR
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/header.json').then((res)=> {
      console.log(res);
      if (res.data.success === true) {
        dispatch(changeList(res.data.data));
      }
    }).catch(()=> {
      console.log('error');
    })
  }
}

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
})

export const changePage= (page) => ({
  type: constants.CHANGE_PAGE,
  page
})

const changeList = (data) =>  ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})