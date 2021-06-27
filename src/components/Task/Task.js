import React from 'react'
import PropTypes from 'prop-types'
import './Task.css'

function Task({taskId, descr, title, deadline, subtasks, onTaskClick, subtaskOrdered, nextPhase, participants}) {
    return (
        <div className="Task-card card">

            <div className="card-content waves-effect waves-block waves-light">
                <span className="card-title grey-text text-darken-4">{title}<i className="material-icons right activator">more_vert</i></span>
                <p>{descr}</p>

                { subtaskOrdered ? 
                    (<ol>
                        { subtasks && subtasks.map(subtask => (<li key={subtask.id} className={`Task-${subtask.status}`}>{subtask.title}</li>)) }
                    </ol>) : 
                    (<ul>
                        { subtasks && subtasks.map(subtask => (<li key={subtask.id} className={`Task-${subtask.status}`}>{subtask.title}</li>)) }
                    </ul>)
                }
                
                <div className={new Date(deadline) < new Date() ? "Task-deadline Task-deadlineBreached" : "Task-deadline"}>
                    {deadline}<i className="tiny material-icons">access_alarm</i>
                </div>
                <div className="Task-chip-container">
                    {
                        participants.map(participant => (
                            <div className={`Task-card-chip ${participant.voted?"Task-completed-by":""} chip`}>
                                <img src="img/yuna.jpg" alt="Contact Person" />
                                <span >{participant.name}</span>
                            </div>
                        ))
                    }
                    <div className="Task-card-chip Task-completed-by chip">
                        <img src="img/yuna.jpg" alt="Contact Person" />
                        <span >Wiktor Kostov</span>
                    </div>

                </div>
                <div className="Task-buttonRow">
                    <button onClick={onTaskClick} taskid={taskId} className={`waves-effect waves-light btn-small ${ (() => {
                        switch (nextPhase){
                            case "unmetConditions":
                                return "disabled";
                            case "underWork":
                                return "orange";
                            case "done":
                                return "";
                            default: return "Task-next-done";
                        }
                    })()}`} ><i className="material-icons right">send</i>Next</button>
                </div>

            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">More info<i className="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
        </div>
    )
}

Task.propTypes = {
    taskId: PropTypes.number.isRequired,
    descr: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
    nextPhase: PropTypes.string.isRequired,
    participants: PropTypes.array,
    subtasks: PropTypes.array,
    subtaskOrdered: PropTypes.bool
}

export default Task

