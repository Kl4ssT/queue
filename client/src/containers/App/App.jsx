import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../store';

import Menu from '../../modules/Menu';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

const App = (props) => {
    return (
        <Provider store={configureStore()}>
            <main className="main">
                <Menu />
            </main>
        </Provider>
    );
};

export default App;