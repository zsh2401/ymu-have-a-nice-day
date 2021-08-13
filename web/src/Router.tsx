import React, { useEffect } from 'react';
import useHistory from './sz-support/common/hooks/useHistory';
import { Router, Route, Switch } from 'react-router';
import ProvisionalPass from './view/pages/ProvisionalPass';
import NotFoundPage from './view/pages/NotFoundPage';
import { showAboutAfterUpdated } from './common/util';
import HomePage from "./view/pages/HomePage"
//Application's router
export default function AppRouter() {

    return <Router history={useHistory()}>
        <Switch>
            {/* <Route exact path="/" component={HomePage}></Route> */}
            <Route exact path="/" component={ProvisionalPass}></Route>
            <Route exact path="/provisional-pass" component={ProvisionalPass}></Route>
            <Route path="*" component={NotFoundPage}></Route>
        </Switch>
    </Router>
}