import React, { PureComponent } from 'react';
import { ListItem, ListInfo, ListItemTitle, ListItemDes, LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';
class List extends PureComponent {
  render() {
    console.log(this.props.list);
    const { list, getMoreList } = this.props;
    return (
      <div>
        {
          list.map((item, index)=> {
            return (
              <Link key={ index } to={ '/detail/'+ item.get('id') }>
                <ListItem>
                  <img alt='' className='list-img' src={item.get('imgUrl')} />
                  <ListInfo>
                    <ListItemTitle>{ item.get('title') }</ListItemTitle>
                    <ListItemDes>{ item.get('desc') }</ListItemDes>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={getMoreList}>更多文字</LoadMore>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.get('home').get('List'),
    page: state.getIn(['home','articlePage'])
  }
};

const mapDispatch = (dispatch) => ({
  getMoreList () {
    dispatch(actionCreators.getMoreList())
  }
})

export default connect(mapStateToProps,mapDispatch)(List);