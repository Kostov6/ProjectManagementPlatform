import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import './Task.css'
import { getLoggedUser } from '../../util/login';

function Task({taskId, descr, title, deadline, subtasks, onTaskClick, stage, participants, owner, project}) {
    function getNextPhase(){
        //check if user has voted for this task
        const loggedUser = getLoggedUser();
        const item = participants.filter(user => user.name === loggedUser)
        if(item.length > 0 && item[0].voted){
            //console.log(participants.filter(user => user.name === loggedUser))
            return -1
        }
        if(subtasks){
            const willProceed = subtasks.reduce((acc, subtask) => acc && (subtask.stage > stage), true)
            if(!willProceed)
                return -1;
        }
        return stage;
    }

    return (
        <div className="Task-card card">

            <div className="card-content waves-effect waves-block waves-light">
                <span className="card-title grey-text text-darken-4">{title}<Link to={`/home/dashboard/${owner}/${project}/taskEdit/${taskId}`}><i className="material-icons right activator">more_vert</i></Link></span>
                <p>{descr}</p>

                {
                    (<ol>
                        { subtasks && subtasks.map(subtask => (<li key={subtask.id} className={`Task-${stage < subtask.stage ? "done" : "todo"}`}>{subtask.title}</li>)) }
                    </ol>)
                }
                
                <div className={new Date(deadline) < new Date() ? "Task-deadline Task-deadlineBreached" : "Task-deadline"}>
                    {deadline}<i className="tiny material-icons">access_alarm</i>
                </div>
                <div className="Task-chip-container">
                    {
                        participants.map(participant => (
                            <div key={participant.name} className={`Task-card-chip ${participant.voted?"Task-completed-by":""} chip`}>
                                <img src={`${process.env.PUBLIC_URL}/img/office.jpg`} alt="Contact Person" />
                                <span >{participant.name}</span>
                            </div>
                        ))
                    }

                </div>
                <div className="Task-buttonRow">
                    <button onClick={onTaskClick} taskid={taskId} className={`waves-effect waves-light btn-small ${ (() => {
                        switch (getNextPhase()){
                            case -1:
                                return "disabled";
                            case 0:
                                return "orange";
                            case 1:
                                return "";
                            default: return "Task-next-done";
                        }
                    })()}`} ><i className="material-icons right" >send</i>Next</button>
                </div>

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

