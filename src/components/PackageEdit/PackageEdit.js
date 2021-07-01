import React, { Component } from 'react'
import './PackageEdit.css'
import {POST} from '../../util/fetchUtil'
export default class PackageEdit extends Component {

    state = {
        packageTitle: this.props.packageTitle,
        packageStartDate: this.props.packageStartDate,
        packageEndDate: this.props.packageEndDate
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.id;
        
        this.setState({
            [name]: value
        });
        
    }

    onPackageAdd = (event) => {
        const bodyData = {
            projectTitle : this.state.projectTitle,
            participants: this.state.participants
        } 
        //POST(`http://localhost:3001/api/packages/add/${}`,bodyData);
    }

    onPackageEdit = (event) => {

    }

    onPackageDelete = (event) => {
        
    }

    render() {
        return (
            <div className="TaskEdit_outerContainer">
                <div className="Task-card card">
                    <div className="card-content waves-effect waves-block waves-light">
                        <h1 className={"PackageEdit-h1 "+ (this.props.type === "Add package" ? "PackageEdit-add" : "PackageEdit-edit")}>{this.props.type || "Edit package"}</h1>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="packageTitle" type="text" className="validated" value={this.state.packageTitle} onChange={this.handleInputChange}/>
                                <label htmlFor="packageTitle" className="active">Package title</label>
                            </div>

                            <div className="input-field col s12">
                                <input id="packageStartDate" type="text" className="validated" value={this.state.packageStartDate} onChange={this.handleInputChange}/>
                                <label htmlFor="packageStartDate" className="active">Package start date</label>
                            </div> 

                            <div className="input-field col s12">
                                <textarea id="packageEndDate" className="materialize-textarea" value={this.state.packageEndDate} onChange={this.handleInputChange}></textarea>
                                <label htmlFor="packageEndDate" className="active">Package end date</label>
                            </div>

                        </div>

                        <div className="row">
                        {
                            this.props.type === "Add package" ? (
                                <div className="input-field col s12">
                                    <a className="waves-effect waves-light btn" onClick={this.onPackageAdd}>Add</a>
                                </div>
                            ) : (
                                <div className="input-field col s12">
                                    <a className="waves-effect waves-light btn" onClick={this.onPackageEdit}>Edit</a>
                                    <a className="waves-effect waves-light btn red PackageEdit_delete" onClick={this.onPackageDelete}>Delete</a>
                                </div>
                            )
                        }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
