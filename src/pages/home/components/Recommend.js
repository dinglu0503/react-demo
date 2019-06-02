import React, { PureComponent } from 'react'
import { RecommendItem, RecommendDownload } from '../style'
import recommend_1  from './images/recommend_1.png';
import recommend_2  from './images/recommend_2.png';
import recommend_3  from './images/recommend_3.png';
import recommend_4  from './images/recommend_4.png';
import qrcode  from './images/qrcode.png';


class Recommend extends PureComponent {
  render() {
    return (
      <div>
        <RecommendItem>
          <img alt='' className='recommend-img' src={ recommend_4}  />
          <img alt='' className='recommend-img' src={ recommend_3}  />
          <img alt='' className='recommend-img' src={ recommend_2}  />
          <img alt='' className='recommend-img' src={ recommend_1}  />
        </RecommendItem>
        <RecommendDownload>
          <img alt='' className='qrcode' src={ qrcode } />
          <div className='info'>
            <h1>下载简书手机APP ></h1>
            <p>随时随地发现和创作内容</p>
          </div>
        </RecommendDownload>
      </div>
    )
  }
}

export default Recommend;