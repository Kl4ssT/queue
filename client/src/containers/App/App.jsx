import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../store';
import Router from '../../router';

import 'semantic-ui-css/semantic.min.css';

const App = (props) => {
    return (
        <Provider store={configureStore()}>
            <Router />
        </Provider>
    );
};

export default App;