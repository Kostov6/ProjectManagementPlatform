import React, { Component } from 'react'
import './PackageEdit.css'
import {POST} from '../../util/fetchUtil'
import { Link } from 'react-router-dom'

export default class PackageEdit extends Component {

    state = {
        packageTitle: "",
        packageStartDate: new Date().toDateString().split(" ").slice(1).toString().replaceAll(',',' '),
        packageEndDate: "",
        owner: this.props.owner,
        project: this.props.project
    }

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

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.id;
        
        this.setState({
            [name]: value
        });
        
    }

    onPackageAdd = (event) => {
        const owner = this.props.owner;
        const project = this.props.project
        const { packageTitle, packageStartDate, packageEndDate } = this.state
        const bodyData = { packageTitle, packageStartDate, packageEndDate, project, owner }
        POST(`http://localhost:3001/api/packages/add/`,bodyData);
    }

    onPackageEdit = (event) => {
        const packageId = this.props.match.params.packageId;
        const bodyData = this.state
        POST(`http://localhost:3001/api/packages/update/${packageId}`, bodyData);

    }

    onPackageDelete = (event) => {
        const packageId = this.props.match.params.packageId;
        POST(`http://localhost:3001/api/packages/delete/${packageId}`,{});
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
                                    <Link to={`/home/dashboard/${this.state.owner}/${this.state.project}/packagesContainer`} className="waves-effect waves-light btn" onClick={this.onPackageAdd}>Add</Link>
                                </div>
                            ) : (
                                <div className="input-field col s12">
                                    <Link to={`/home/dashboard/${this.state.owner}/${this.state.project}/packagesContainer`} className="waves-effect waves-light btn" onClick={this.onPackageEdit}>Edit</Link>
                                    <Link to={`/home/dashboard/${this.state.owner}/${this.state.project}/packagesContainer`} className="waves-effect waves-light btn red PackageEdit_delete" onClick={this.onPackageDelete}>Delete</Link>
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
