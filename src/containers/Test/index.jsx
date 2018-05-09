import React, { Component } from 'react';
import ReactDom from 'react-dom';
// import { BrowserRouter, Redirect, Router, Route, Link } from 'react-router-dom';
import S from './index.scss'
class Test extends React.Component {
    render() {
      return (
        <div className={S.testDiv}>
            <p>This is a test page</p>
        </div>
      )
    }
  }

export default Test;
