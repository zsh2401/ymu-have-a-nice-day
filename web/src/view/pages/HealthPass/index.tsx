import { Icon, NavBar } from "antd-mobile"
import React from "react"
import { useState } from "react"
import { Route, Switch } from "react-router-dom"
import { AppDataConsumer } from "../../../App"
import { useHistory } from "../../../sz-support"
import Body from "./Body"
import ProvisionalPass from "./ProvisionalPass"

export interface HealthPassPageData {
    title: string;
    setTitle: (newValue: string) => void;
}
const { Consumer, Provider } = React.createContext<HealthPassPageData>(null!)
export const HealthPassPageDataConsumer = Consumer
export default function () {
    const [title, setTitle] = useState("健康出入证")
    return <div>
        <Provider value={{
            title, setTitle
        }}></Provider>

        <NavBar mode="light" leftContent={
            <div >
                <Icon onClick={() => useHistory().goBack()} size="lg" type="left"></Icon>
                <Icon onClick={() => useHistory().push("/")} size="lg" type="cross"></Icon>
            </div>} >
            {title}
        </NavBar>

        <Switch>
            <Route exact path="/health-pass" component={Body}></Route>
            <Route path="/health-pass/provisional-pass" component={ProvisionalPass}></Route>
        </Switch>

    </div >
}