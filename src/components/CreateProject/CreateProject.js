import React, { Component } from 'react'
import './CreateProject.css'
import {POST} from '../../util/fetchUtil'

export default class CreateProject extends Component {

    state = {
        projectTitle: "",
        participantFiled: "",
        participants: []
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.id;
        
        this.setState({
            [name]: value
        });
        
    }

    handleAddInvite = (event) => {
        const target = event.target.nextSibling;
        target.value="";

        this.setState((state,props) => ({
            participantFiled: "",
            participants: state.participants.concat([state.participantFiled])
        }))

    }
    

    handleCreateProject = async (event) => {
        const bodyData = {
            projectTitle : this.state.projectTitle,
            participants: this.state.participants
        } 
        POST('http://localhost:3001/api/projects/newProject',bodyData);
    }

    render() {
        return (
            <div className="TaskEdit_outerContainer">
            <div className="Task-card card">
                <div className="card-content waves-effect waves-block waves-light">
                    <h1>Create new project</h1>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="projectTitle" type="text" className="validated" value={this.state.projectTitle} onChange={this.handleInputChange}/>
                            <label htmlFor="projectTitle" className="active">Project title</label>
                        </div>
                    
                        <div className="input-field col s12 TaskEdit-subtaskHeader">
                            <h5 className="TaskEdit-subtaskHeader">Invitations to be send:</h5>   
                            {
                                this.state.participants.map(participant => (
                                    <div key={participant}>
                                        <i className="material-icons CreateProject-person" >person</i>
                                        <span>{participant}</span>
                                    </div>
                                ))
                            }
                        </div>

                        <div className=" input-field col s12">
                            <i className="material-icons prefix subtaskAdd" onClick={this.handleAddInvite}>person_add</i>
                            <input id="participantFiled" type="text" className="validate" onChange={this.handleInputChange}/>
                            <label htmlFor="participantFiled">New participant</label>
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <a className="waves-effect waves-light btn" onClick={this.handleCreateProject}>Create</a>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
