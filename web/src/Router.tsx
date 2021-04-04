import React, { useEffect } from 'react';
import useHistory from './sz-support/common/hooks/useHistory';
import { Router, Route, Switch } from 'react-router';
import IndexPage from './view/pages/IndexPage';
import NotFoundPage from './view/pages/NotFoundPage';
import { showAboutAfterUpdated } from './view/pages/IndexPage/util';

//Application's router
export default function AppRouter() {

    return <Router history={useHistory()}>
        <Switch>
            <Route exact path="/" component={IndexPage}></Route>
            <Route path="*" component={NotFoundPage}></Route>
        </Switch>
    </Router>
}