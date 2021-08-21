// import "!!style-loader!css-loader?modules=false!bootstrap/dist/css/bootstrap.min.css"
// import "jquery"
// import "bootstrap"

import "antd/dist/antd.css"
import 'antd-mobile/dist/antd-mobile.css'
import "./App.css"
import "rsuite/dist/styles/rsuite-default.css"
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router'
import { showAbout, showAboutAfterUpdated } from './common/util';
import useCachedState from './common/useCachedState';

/* 2021年3月27日项目启动
 2021年3月28日已经有一半代码看不懂了
 希望将来的某一天，需要修改时，还有机会吧！ 
 */
export default function () {
    ReactDOM.render(<App />
        , document.querySelector("#app"))

    showAboutAfterUpdated()
}

export interface AppData {
    studentName: string
    setStudentName: (newValue: string) => void

    studentId: string
    setStudentId: (newValue: string) => void

    studentGrade: string
    setStudentGrade: (newValue: string) => void

    studentClass: string
    setStudentClass: (newValue: string) => void

    studentAvatar: any[]
    setStudentAvatar: (newValue: never[]) => void

}

const { Provider, Consumer } = React.createContext<AppData>(null!)
export const AppDataConsumer = Consumer;

function App() {

    const [studentName, setStudentName] = useCachedState("stuname", "无名氏")
    const [studentId, setStudentId] = useCachedState("stuid", "20202182507139")
    const [studentGrade, setStudentGrade] = useCachedState("stugrade", "2020")
    const [studentClass, setStudentClass] = useCachedState("stuclass", "数学与计算机学院20级计算机科学与技术一班")
    const [studentAvatar, setStudentAvatar] = useCachedState("stuavatar", [])

    return <Provider value={
        {
            studentAvatar, setStudentAvatar,
            studentName, setStudentName,
            studentId, setStudentId,
            studentGrade, setStudentGrade,
            studentClass, setStudentClass
        }
    }>

        <Router />
    </Provider>
}