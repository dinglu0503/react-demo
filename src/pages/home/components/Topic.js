import React, { PureComponent } from 'react'
import { TopicWrapper, TopicItem } from '../style'
import { connect } from 'react-redux'

class Topic extends PureComponent {
  render() {
    return (
      <TopicWrapper>
        {
          this.props.list.map((item)=> {
            return (
              <TopicItem key={item.get('id')}>
                <img alt='' className='topic-pic' src={item.get('imgUrl')}></img>
                {item.get('title')}
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.get('home').get('topicList')
  }
};


export default connect(mapStateToProps,null)(Topic);

