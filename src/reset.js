import { createGlobalStyle } from 'styled-components'


const Reset = createGlobalStyle`
    @charset "utf-8";

    /*
        @名称: reset
        @功能: 重设浏览器默认样式
    */

    /* 防止用户自定义背景颜色对网页的影响，添加让用户可以自定义字体 */
    html {
        color:#000;
        background:#fff;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
    }
    html,
    body {
        margin: 0;
        padding: 0;
    }

    * {
      box-sizing: border-box;
    }

    /* 内外边距通常让各个浏览器样式的表现位置不同 */
    body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section,select {
        margin:0;
        padding:0;
    }

    /* 重设 HTML5 标签, IE 需要在 js 中 createElement(TAG) */
    article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
        display:block;
    }

    /* HTML5 媒体文件跟 img 保持一致 */
    audio,canvas,video {
        display: inline-block;
        *display: inline;
        *zoom: 1;
    }

    /* 要注意表单元素并不继承父级 font 的问题 */
    body,button,input,select,textarea {
        font: 14px/1.5 'Helvetica Neue', Arial, 'Hiragino Sans GB', 'STHeiti', 'STHeiti Light [STXihei]', 'Microsoft Yahei', sans-serif;
        color: #626262;
    }
    .browser-hack-ie {
        font: 14px/1.5 Arial , 'Microsoft Yahei', sans-serif;
    }
    input,select,textarea {
        font-size:100%;
    }

    /* 去掉各Table  cell 的边距并让其边重合 */
    table {
        border-collapse:collapse;
        border-spacing:0;
    }

    /* IE bug fixed: th 不继承 text-align*/
    th {
        text-align:inherit;
    }

    /* 去除默认边框 */
    fieldset,img {
        border:0;
    }

    /* ie6 7 8(q) bug 显示为行内表现 */
    iframe {
        display:block;
    }

    /* 去掉 firefox 下此元素的边框 */
    abbr,acronym {
        border:0;
        font-variant:normal;
    }

    /* 一致的 del 样式 */
    del {
        text-decoration:line-through;
    }

    address,caption,cite,code,dfn,em,th,var {
        font-style:normal;
        font-weight:500;
    }

    /* 去掉列表前的标识, li 会继承 */
    ol,ul {
        list-style:none;
    }

    /* 对齐是排版最重要的因素, 别让什么都居中 */
    caption,th {
        text-align:left;
    }

    /* 来自yahoo, 让标题都自定义, 适应多个系统应用 */
    h1,h2,h3,h4,h5,h6,b {
        font-size:100%;
        font-weight:500;
    }

    q:before,q:after {
        content:'';
    }

    /* 统一上标和下标 */
    sub, sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }
    sup {
        top: -0.5em;
    }
    sub {
        bottom: -0.25em;
    }

    /* 让链接在 hover 状态下显示下划线 */
    a {
        text-decoration:none;
        color:#5079d9;
        cursor:pointer;
        -webkit-transition: all .3s ease;
        transition: all .3s ease;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }
    a:hover{
        text-decoration:none;
        color:#395699;
        -webkit-transition: all .3s ease-out;
        transition: all .3s ease-out;
    }

    /* 默认不显示下划线，保持页面简洁 */
    ins,a {
        text-decoration:none;
    }



    i {
        font-style:normal;
    }

    /********去虚线框**********/
    /*a {
        blr: expression(this.onFocus=this.close());
    }*/ /* 只支持IE，过多使用效率低 */
    /*a {
        blr: expression(this.onFocus=this.blur());
    }*/ /* 只支持IE，过多使用效率低 */
    a:focus {
        -moz-outline-style: none;
    } /* IE不支持 */
    :focus {
        outline: none;
    } /* for Firefox */
    /*  移除默认的重新输入按钮和查看密码额眼睛  */
    input::-ms-clear{display:none;}
    input::-ms-reveal { display: none; }

`

export default Reset;
