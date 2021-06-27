
const mockTasks = {
    todo: [
        {
            id: 1,
            descr: "Todo 1",
            title: "First todo",
            deadline: "5 April 2021",
            nextPhase: "underWork",
            participants: [
                {
                    name: "Peshko",
                    voted: true
                }
            ]
        },
        {
            id: 3,
            descr: "Descr 3",
            title: "Todo 2",
            deadline: "28 April 2021",
            subtasks: [

                {
                    id: 2,
                    title: "Task 2",
                    status: "done"
                },
                {
                    id: 4,
                    title: "Task 4",
                    status: "underWork"
                },
                {
                    id: 1,
                    title: "First todo",
                    status: "todo"
                }
            ],
            subtaskOrdered: true,
            nextPhase: "unmetConditions",
            participants: [
                {
                    name: "Peshko",
                    voted: false
                }
            ]
        }
    ],
    underWork: [
        {
            id: 4,
            descr: "Descr 4",
            title: "Task 4",
            deadline: "8 April 2021",
            nextPhase: "done",
            participants: [
                {
                    name: "Peshko",
                    voted: true
                }
            ]
        },
        {
            id: 5,
            descr: "Descr 5",
            title: "Task 5",
            deadline: "29 April 2021",
            subtasks:[
                {
                    id: 4,
                    title: "Task 4",
                    status: "underWork"
                },
                {
                    id: 2,
                    title: "Task 2",
                    status: "done"
                }
            ],
            subtaskOrdered: false,
            nextPhase: "unmetConditions",
            participants: [
                {
                    name: "Peshko",
                    voted: false
                }
            ]
        }
    ],
    done: [
        { 
            id: 2, 
            descr: "Descr 2", 
            title: "Task 2", 
            deadline: "6 April 2021",
            nextPhase: "end",
            participants: [
                {
                    name: "Peshko",
                    voted: false
                }
            ]
        }
    ]

};

export default mockTasks;