import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getAllByText } from '@testing-library/react'
import "./TaskEdit.css"
import { POST } from '../../util/fetchUtil'

export default class TaskEdit extends Component {
    /*
    static propTypes = {
        prop: PropTypes
    }
    */
    state = {
        taskTitle: this.props.taskTitle,
        taskDeadline: this.props.taskDeadline,
        taskDescr: this.props.taskDescr,
        participants: this.props.participants,
        allUsers: this.props.allUsers,
        subTasks: this.props.subTasks,
        owner: this.props.owner,
        project: this.props.project,
        taskId: ""
    }

    
    componentDidMount(){
        if(this.props.match)
            this.setState({taskId: this.props.match.params.taskId})
    }
/*
    componentDidMount(){
        const fetchPackages = async () => {
            if(this.props.match){
                this.setState({owner: this.props.match.params.owner, project: this.props.match.params.project})
                const packageId = this.props.match.params.packageId;
                const result = await fetch(`http://localhost:3001/api/packages/get/${packageId}`)
                const resultData = await result.json()
                const {packageTitle, packageStartDate, packageEndDate} = resultData
                this.setState({ packageTitle, packageStartDate, packageEndDate})
            }

        }
        
        fetchPackages();
    }
    */

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.id;
        
        if(this.state.allUsers.includes(name)){
            const nameIndex = this.state.allUsers.indexOf(name)
            
            this.setState((state, props) => ({
                participants: state.participants.map((element, index) => nameIndex == index ? !element : element)
              }))
        }
        else{
            this.setState({
                [name]: value
            });
        }
    }

    handleAddSubtask = (event) => {
        const target = event.target;
        const newSubtask = target.nextSibling.value

        target.nextSibling.value = ""
        if(!this.state.subTasks.includes(newSubtask)){
            this.setState((state, props) => ({
                subTasks: state.subTasks.concat([newSubtask])
            }))
        }
        console.log(newSubtask)
    }

    handleRemoveSubtask = (event) => {
        const target = event.target;
        const subtaskToRemove = target.getAttribute("subtask")

        this.setState((state, props) => ({
            subTasks: state.subTasks.filter(subtask => subtask != subtaskToRemove)
        }))
    }

    onTaskAdd = () =>{
        console.log(this.state)
        POST("http://localhost:3001/api/tasks/add",this.state)
    }

    onTaskDelete = () =>{
        POST(`http://localhost:3001/api/tasks/delete/${this.state.taskId}`,this.state)
    }

    render() {
        return (        
        <div className="TaskEdit_outerContainer">
            <div className="Task-card card">
                <div className="card-content waves-effect waves-block waves-light">
                    <h1 className={"TaskEdit-h1 "+ (this.props.type === "Add task" ? "TaskEdit-add" : "TaskEdit-edit")}>{this.props.type || "Edit task"}</h1>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="taskTitle" type="text" className="validated" value={this.state.taskTitle} onChange={this.handleInputChange}/>
                            <label htmlFor="TaskName" className="active">Task title</label>
                        </div>

                        <div className="input-field col s12">
                            <input id="taskDeadline" type="text" className="validated" value={this.state.taskDeadline} onChange={this.handleInputChange}/>
                            <label htmlFor="TaskName" className="active">Task deadline</label>
                        </div> 

                        <div className="input-field col s12">
                            <textarea id="taskDescr" className="materialize-textarea" value={this.state.taskDescr} onChange={this.handleInputChange}></textarea>
                            <label htmlFor="taskDescr" className="active">Task description</label>
                        </div>

                    
                        <div className="input-field col s12 TaskEdit-subtaskHeader">
                            <h5 className="TaskEdit-subtaskHeader">Subtasks:</h5>   
                            {
                                (this.state.subTasks || []).map(subTask => (
                                    <div key={subTask}>
                                        <i subtask={subTask} className="material-icons TaskEdit-removeSubtask" onClick={this.handleRemoveSubtask}>delete</i>
                                        <span>{subTask}</span>
                                    </div>
                                ))
                            }
                        </div>

                        <div className=" input-field col s12">
                            <i className="material-icons prefix subtaskAdd" onClick={this.handleAddSubtask}>add_circle</i>
                            <input id="icon_prefix" type="text" className="validate" />
                            <label htmlFor="icon_prefix">New subtask</label>
                        </div>

                        {
                            (this.state.allUsers || []).map((user,index) => 
                                (
                                    <div key={user} className="input-field col s6" >
                                        <label>
                                            <input type="checkbox" id={user} checked={this.state.participants[index]} onChange={this.handleInputChange} />
                                            <span>{user}</span>
                                        </label>
                                    </div>
                                )
                            )
                        }
                        
                    </div>
                
                </div>

                <div className="row">
                {
                    this.props.type !== "Add task" ? (
                        <div className="input-field col s12">
                            <a className="waves-effect waves-light btn">Edit</a>
                            <a onClick={this.onTaskDelete}className="waves-effect waves-light btn red TaskEdit_delete">Delete</a>
                        </div>   
                    ) : (
                        <div className="input-field col s12">
                            <a onClick={this.onTaskAdd}className="waves-effect waves-light btn">Add</a>
                        </div>
                    )
                }
                </div>
            </div>
        </div>
        )
    }
}
