import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getAllByText } from '@testing-library/react'

export default class TaskEdit extends Component {
    static propTypes = {
        prop: PropTypes
    }
    state = {
        TaskTitle: this.props.TaskTitle,
        TaskDeadline: this.props.TaskDeadline,
        TaskDescr: this.props.TaskDescr,
        checkboxDude3: true,
        TaskParticipanst: {
            First: true,
            2: "Blagoi"
        }
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
                <h1 className="TaskEdit-h1">Edit task</h1>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="TaskTitle" type="text" className="validated" value={this.state.TaskTitle} onChange={this.handleInputChange}/>
                        <label htmlFor="TaskName" className="active">Task title</label>
                    </div>

                    <div class="input-field col s12">
                        <input id="TaskDeadline" type="text" className="validated" value={this.state.TaskDeadline} onChange={this.handleInputChange}/>
                        <label htmlFor="TaskName" className="active">Task deadline</label>
                    </div> 

                    <div class="input-field col s12">
                        <textarea id="TaskDescr" className="materialize-textarea" value={this.state.TaskDescr} onChange={this.handleInputChange}></textarea>
                        <label htmlFor="TaskDescr" className="active">Task description</label>
                    </div>

                    <p>
                        <label>
                            <input type="checkbox" id="checkboxDude3" checked={this.state.checkboxDude3} onChange={this.handleInputChange} />
                            <span>Yellow</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type="checkbox" id="checkboxDude2" onChange={this.handleInputChange} />
                            <span>Yellow</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type="checkbox" id="checkboxDude" onChange={this.handleInputChange}/>
                            <span>Yellow</span>
                        </label>
                    </p>
                </div>
                
                <a className="waves-effect waves-light btn">Edit</a>
            </div>
        </div>
        )
    }
}
