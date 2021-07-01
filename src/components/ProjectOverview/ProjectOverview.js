import React, { Component } from 'react'
import { Link } from "react-router-dom";
import M from 'materialize-css'
import './ProjectOverview.css'
import ProjectSidenav from '../ProjectSidenav/ProjectSidenav';
import { react } from '@babel/types';

export default class ProjectOverview extends Component {

    handleInvite = (event) => {
        console.log("invite initialie")
    }

    handleStarred = (event) => {
        console.log("star initialie")
        fetch("http://localhost:3001/test")
            .then(res => res.json())
            .then(data => console.log(data));
    }

    handleSidenavOpen = () => {
        const elem = document.querySelector('.sidenav');
        const instance = M.Sidenav.getInstance(elem)
        instance.open()
    }

    render() {
        return (
            <React.Fragment>
            <nav>
                <div className="nav-wrapper">
                <a href="#" className="brand-logo">{this.props.match.params.project}</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a><i className="material-icons PO_sidebar" onClick={this.handleSidenavOpen}>menu</i></a></li>
                </ul>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to={`/home/dashboard/${this.props.match.params.owner}/${this.props.match.params.project}/packagesContainer`}><i className="material-icons PO_packageView" >assignment</i></Link></li>
                    <li><Link to={`/home/dashboard/${this.props.match.params.owner}/${this.props.match.params.project}/tasksContainer`}><i className="material-icons PO_taskView">assignment_turned_in</i></Link></li>
                    <li><Link to={`/home/dashboard/${this.props.match.params.owner}/${this.props.match.params.project}/taskAdd`}><i className="material-icons PO_taskAdd">library_add</i></Link></li>
                    <li><a><i className="material-icons ProjectOverview_star" onClick={this.handleStarred}>star_border</i></a></li>
                    
                    <li>
                        <div className="Participants-chip-container">
                        {
                            (this.props.participants || ["Penchi","Cho4i"] ).map(participant => (
                                <div key={participant} className="Task-card-chip chip">
                                    <img src={`${process.env.PUBLIC_URL}/img/yuna.jpg`} alt="Contact Person" />
                                    <span>{participant}</span>
                                </div>
                            ))
                        }
                        </div>
                    </li>

                   
                </ul>
                </div>
          </nav>
          </React.Fragment>
        )
    }
}
