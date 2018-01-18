import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ChooseUserType from '../containers/ChooseUserType';
import ClientContainer from '../containers/ClientContainer';
import EmployeeContainer from '../containers/EmployeeContainer';

const Router = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ChooseUserType} />
                <Route path="/client" exact component={ClientContainer} />
                <Route path="/employee" exact component={EmployeeContainer} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;