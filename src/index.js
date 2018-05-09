import React from 'react';
import ReactDOM from 'react-dom';
// import { Test } from './containers';

// ReactDOM.render(
//     <Test />,
//     document.getElementById('app')
// );


// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Redirect, Router, Route, Link } from 'react-router-dom';
import S from './index.scss'
class Test extends React.Component {
    render() {
      return (
        <div className={ S.testDiv }>
            <p>This is a test page</p>
        </div>
      )
    }
}

ReactDOM.render(
    <Test />,
    document.getElementById('app')
);