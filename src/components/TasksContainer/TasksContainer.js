import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TasksColumn from '../TasksColumn/TasksColumn'
import "./TasksContainer.css"
import mockTasks from '../../mockTasks'

export default class TasksContainer extends Component {
    state = {
        taskList : mockTasks
    }

    static propTypes = {
    }

    handleTaskOnclick = (event) => {
        const loggedUser = "Pesho"

        const taskEl = event.currentTarget;

        this.updateStateOnTaskMove(loggedUser, taskEl.getAttribute("taskid"))
    }

    updateStateOnTaskMove = (user,taskId) => {
        console.log(user + " " + taskId)
    } 

    render() {
        return (
            <div className="TasksContainer-container">
                <TasksColumn columnType="Todos" tasksList={this.state.taskList.todo} onTaskClick={this.handleTaskOnclick}></TasksColumn>
                <TasksColumn columnType="Under work" tasksList={this.state.taskList.underWork} onTaskClick={this.handleTaskOnclick}></TasksColumn>
                <TasksColumn columnType="Done" tasksList={this.state.taskList.done} onTaskClick={this.handleTaskOnclick}></TasksColumn>
            </div>
        )
    }
}
