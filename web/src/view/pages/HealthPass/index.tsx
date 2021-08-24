import React from "react"
import { Route, Switch } from "react-router-dom"
import Body from "./Body"
import ProvisionalPass from "./ProvisionalPass"
import Display from "./ProvisionalPass/Display"
export default function () {

    return <div>
        <Switch>
            <Route exact path="/health-pass" component={Body}></Route>
            <Route exact path="/health-pass/provisional-pass" component={ProvisionalPass}></Route>
            <Route exact path="/health-pass/display" component={Display}></Route>
        </Switch>
    </div >
}