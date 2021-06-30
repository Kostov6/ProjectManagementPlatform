import React, { Component } from 'react'
import './ProjectOverview.css'
import M from '../../../public/js/materialize'

export default class ProjectOverview extends Component {
    handleInvite = (event) => {
        console.log("invite initialie")
    }

    handleStarred = (event) => {
        console.log("star initialie")
    }

    handleSidenavOpen = () => {
        const elem = document.querySelector('.sidenav');
        const instance = M.Sidenav.getInstance(elem)
        instance.open()
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                <button onClick={handleSidenavOpen}>Test</button>
                <a href="#" className="brand-logo">Project name</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    
                    <li><i className="material-icons ProjectOverview_star" onClick={this.handleStarred}>star_border</i></li>
                    <li>
                        <div className=" input-field col s12">
                            <i className="material-icons prefix inviteButton" onClick={this.handleInvite}>group_add</i>
                            <input id="icon_prefix" type="text" className="validate" />
                            <label htmlFor="icon_prefix"></label>
                        </div>
                    </li>
                    <li>
                        <div className="Participants-chip-container">
                        {
                            this.props.participants.map(participant => (
                                <div key={participant} className="Task-card-chip chip">
                                    <img src="img/yuna.jpg" alt="Contact Person" />
                                    <span>{participant}</span>
                                </div>
                            ))
                        }
                        </div>
                    </li>
                    <li>+16</li>

                   
                </ul>
                </div>
          </nav>
          
        )
    }
}
