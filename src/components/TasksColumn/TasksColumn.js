import React from 'react'
import PropTypes from 'prop-types'
import Task from '../Task/Task'
import "./TasksColumn.css"

function TaskColumn({columnType,tasksList,...rest}) {
    return (
        <div className="TasksColumn">
            <h2>{columnType}</h2>
            {
                tasksList.map(task => (<Task key={task.id} taskId={task.id} descr={task.descr} title={task.title} deadline={task.deadline} subtasks={task.subtasks} subtaskOrdered={task.subtaskOrdered} nextPhase={task.nextPhase}{...rest} />))
            }
        </div>
    )
}

TaskColumn.propTypes = {
    columnType: PropTypes.string.isRequired
}

export default TaskColumn

