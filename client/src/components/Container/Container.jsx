import React from 'react';

import './Container.css';

const Container = (props) => {
    return (
        <div className="container">
            <div className="container__child">
                {props.children}
            </div>
        </div>
    );
};

export default Container;