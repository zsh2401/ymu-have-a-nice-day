// import "!!style-loader!css-loader?modules=false!bootstrap/dist/css/bootstrap.min.css"
// import "jquery"
// import "bootstrap"

import 'antd-mobile/dist/antd-mobile.css'
import "./App.css"
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router'
import { showAbout, showAboutAfterUpdated } from './common/util';

/* 2021年3月27日项目启动
 2021年3月28日已经有一半代码看不懂了
 希望将来的某一天，需要修改时，还有机会吧！
 */
export default function () {
    ReactDOM.render(React.createElement(Router)
        , document.querySelector("#app"))

    showAboutAfterUpdated()
}