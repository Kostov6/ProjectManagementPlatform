import React from 'react'
import TaskEdit from '../TaskEdit/TaskEdit'

export default function AddTask() {
    return (
        <TaskEdit type="Add task" taskTitle="" taskDescr="" taskDeadline="" allUsers={["TheChosen","BaiIvan","Peshko","Goiko","Pi4a96"]} participants={[false,false,false,false,false]} subTasks={[]} />
    )
}
