import React, { Component } from 'react'
import PackagesContainer from './components/PackagesContainer/PackagesContainer';
import TasksContainer from './components/TasksContainer/TasksContainer';

export default class App extends Component {

    render() {
        return (
            <React.Fragment>
                <h1>Component testing</h1>
                <PackagesContainer />
            </React.Fragment>
        )
    }
}
