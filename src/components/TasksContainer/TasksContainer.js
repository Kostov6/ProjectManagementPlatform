import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TasksColumn from '../TasksColumn/TasksColumn'
import "./TasksContainer.css"
import { getLoggedUser } from '../../util/login' 
import { POST } from '../../util/fetchUtil'

export default class TasksContainer extends Component {
    state = {
        taskList : [],
        owner: "",
        project: ""
    }

    componentDidMount(){
        const fetchPackages = async () => {
            const owner = this.props.match.params.owner;
            const project = this.props.match.params.project
            const result = await fetch(`http://localhost:3001/api/tasks/all`)
            const resultData = await result.json()
            this.setState({taskList: resultData, owner, project})
        }
        
        fetchPackages();
    }

    handleTaskOnclick = (event) => {
        const loggedUser = getLoggedUser()

        const taskEl = event.currentTarget;

        this.updateStateOnTaskMove(loggedUser, taskEl.getAttribute("taskid"))
    }

    updateStateOnTaskMove = (user,taskId) => {
        POST(`http://localhost:3001/api/tasks/nextStep/${taskId}`,{})
            .then(updateRes => fetch(`http://localhost:3001/api/tasks/all`))
            .then(res => res.json())
            .then(taskList => this.setState({taskList}))
    } 

    render() {
        return (
            <div className="TasksContainer-container">
                <TasksColumn columnType="Todos" tasksList={this.state.taskList.filter(task => task.stage === 0)} onTaskClick={this.handleTaskOnclick} owner={this.state.owner} project={this.state.project}></TasksColumn>
                <TasksColumn columnType="Under work" tasksList={this.state.taskList.filter(task => task.stage === 1)} onTaskClick={this.handleTaskOnclick} owner={this.state.owner} project={this.state.project}></TasksColumn>
                <TasksColumn columnType="Done" tasksList={this.state.taskList.filter(task => task.stage === 2)} onTaskClick={this.handleTaskOnclick} owner={this.state.owner} project={this.state.project}></TasksColumn>
            </div>
        )
    }
}
