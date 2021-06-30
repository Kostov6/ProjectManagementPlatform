import React, { Component } from 'react'
import './PackageEdit.css'
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

    render() {
        return (
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
                                <a className="waves-effect waves-light btn">Add</a>
                            </div>
                        ) : (
                            <div className="input-field col s12">
                                <a className="waves-effect waves-light btn">Edit</a>
                                <a className="waves-effect waves-light btn red PackageEdit_delete">Delete</a>
                            </div>
                        )
                    }
                    </div>
                </div>
            </div>
        )
    }
}
