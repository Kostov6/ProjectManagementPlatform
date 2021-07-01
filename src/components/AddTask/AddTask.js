import React from 'react'
import TaskEdit from '../TaskEdit/TaskEdit'
import { useParams } from 'react-router'
export default function AddTask() {

    let { project , owner } = useParams();

    return (
        <TaskEdit project={project} owner={owner} type="Add task" taskTitle="" taskDescr="" taskDeadline="" allUsers={["TheChosen","BaiIvan","Pencho","Goiko","Svetko"]} participants={[false,false,false,false,false]} subTasks={[]} />
    )
}
