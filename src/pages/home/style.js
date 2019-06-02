import  styled   from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  height: 300px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  .banner-img {
    width: 625px;
    height: 240px;
  }
`;

export const HomeRight = styled.div`
  width: 240px;
  float: right;
  padding: 30px 0 0;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
`;

export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  padding-right: 10px;
  height: 32px;
  line-height:32px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  margin-right: 10px;
  margin-bottom: 18px;
  .topic-pic{
    width: 32px;
    height: 32px;
    display: block;
    float:left;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  position: relative;
  width: 100%;
  min-height: 112px;
  padding:20px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: freak-word;
  .list-img {
    position: absolute;
    right: 0;
    border-radius: 4px;
    width: 150px;
    height: 100px;
  }
`;

export const ListInfo = styled.div`
  padding-right: 165px;
  box-sizing: border-box;
`;

export const ListItemTitle = styled.h1`
  color: #333;
  font-size: 18px;
  font-weight: 700px;
  line-height: 1.5;
`;

export const ListItemDes = styled.p`
  display: block;
  margin: 0 0 8px;
  font-size: 13px;
  line-height: 24px;
  color: #999;
  box-sizing: border-box;
`;

export const RecommendItem = styled.div`
  margin-top: -4px;
  padding-bottom: 4px;
  .recommend-img {
    width: 100%;
    height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
  }
`;

export const RecommendDownload = styled.div`
  overflow: hidden;
  margin-bottom: 30px;
  padding: 10px;
  width: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  .qrcode {
    display: block;
    float: left;
    width: 60px;
    height: 60px;
    opacity: .85;
    margin-right: 10px;
  }
  .info {
    display: inline-block;
    vertical-align: middle;
    float: left;
    h1 {
      font-size: 15px;
      color: #333;
    }
    p {
      margin-top: 4px;
      font-size: 13px;
      color: #999;
  }
`;

export const WriterWrapper = styled.div`
  position: relative;
  margin-top: 20px;
`;

export const WriterHeader = styled.div`
  text-align: left;
  font-size: 14px;
  color: #969696;
  overflow: hidden;
  .change {
    display: block;
    float: right;
  }
`;

export const WriterList = styled.ul`
  margin: 0 0 20px;
  text-align: left;
  list-style: none;
`;

export const WriterItem = styled.li`
  margin-top: 15px;
  line-height: 20px;
  overflow: hidden;
  img {
    display: inline-block;
    float: left;
    width: 48px;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 50%;
    margin-right: 10px;
  }
  .item-fllow {
    float: left;
    padding: 5px;
    span {
      font-size: 14px;
      color: #333;
    }
    a {
      float: right;
      position: absolute;
      padding: 0;
      right: 0;
      font-size: 13px;
      color: #42c02e;
    }
    p {
      margin-top: 2px;
      font-size: 12px;
      color: #969696;
    }
  }
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align:center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;

export const BackTop = styled.div`
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 50px;
  right: 50px;
  border: 1px solid #dcdcdc;
  z-index: 1000;
  line-height: 50px;
  text-align: center;
`;



