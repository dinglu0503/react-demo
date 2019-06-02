import React, { PureComponent } from 'react'
import { WriterWrapper, WriterHeader, WriterList, WriterItem } from '../style'
import { connect } from 'react-redux'

class Writer extends PureComponent {
  render() {
    console.log(this.props.list);
    return (
      <WriterWrapper>
        <WriterHeader>
          <span>推荐作者</span>
          <span className='change'>换一批</span>
        </WriterHeader>
        <WriterList>
          {this.props.list.map((item, index) => {
            return (
              <WriterItem key={index}>
                <img alt='' src={item.get('avatarUrl')} />
                <div className='item-fllow'>
                  <span>{item.get('nickname')}</span>
                  <a>+ 关注</a>
                  <p>{item.get('words_num')} · {item.get('fans_num')}</p>
                </div>
              </WriterItem>
            )
          })}
        </WriterList>
      </WriterWrapper>
    )
  }
}

const mapStateToProps = ((state)=> {
  return {
    list: state.get('home').get('writerList')
  }
})

export default connect(mapStateToProps, null)(Writer);