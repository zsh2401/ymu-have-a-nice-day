import React from 'react';
import useHistory from './sz-support/common/hooks/useHistory';
import { Router, Route, Switch } from 'react-router';
import HealthPass from './view/pages/HealthPass';
import NotFoundPage from './view/pages/NotFoundPage';
import HomePage from "./view/pages/HomePage"
//Application's router
export default function AppRouter() {

    return <Router history={useHistory()}>
        <Switch>
            <Route exact path="/" component={HomePage}></Route>
            {/* <Route exact path="/" component={ProvisionalPass}></Route> */}
            <Route path="/health-pass" component={HealthPass}></Route>
            <Route path="*" component={NotFoundPage}></Route>
        </Switch>
    </Router>
}