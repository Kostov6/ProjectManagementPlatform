import React, { Component } from 'react'
import PackagesContainer from './components/PackagesContainer/PackagesContainer';
import TasksContainer from './components/TasksContainer/TasksContainer';
import TaskEdit from './components/TaskEdit/TaskEdit';


export default class App extends Component {

    render() {
        return (
            <React.Fragment>
                <h1>Component testing</h1>
                <TaskEdit TaskTitle="First todo" TaskDescr="Todo 1" TaskDeadline="5 April 2021" />
            </React.Fragment>
        )
    }
}
