import styled  from 'styled-components';
import logoPic  from '../../assets/images/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  background: #fff;
  width: 100%;
  border-bottom: 1px solid rgb(240, 240, 240);
`;

export const Logo = styled.div`
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  border-sizing: border-box;
  padding-right: 70px;
  height: 100%;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  color: #333;
  font-size: 17px;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.foused {
      color:#fff;
      background: #777;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder:'搜索'
})`
  box-sizing: border-box;
  width: 160px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 40px 0 20px;
  border: 1px solid #eee;
  outline: none;
  border-radius: 40px;
  font-size: 14px;
  color: #666;
  background: #eee;
  &::placeholder {
    color: #999;
  }
  &.foused {
    width: 240px;
  }
  &.slide-enter {
    transition: all .3s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .3s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  background: #FFF;
  z-index: 10;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-sizie: 14px;
  color: $969696;
`;

export const SearchInfoSwitch = styled.span`
float: right;
font-size: 13px;
cursor: pointer;
.spin {
  display: block;
  float: left;
  font-size: 12px;
  margin-right: 2px;
  transition: all .3s ease-in;
  transform-origin: center center;
}
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`;

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #333;
  border-radius: 2px;
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button= styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    color: #fff;
    background:  #ec6149;
  }
`;
