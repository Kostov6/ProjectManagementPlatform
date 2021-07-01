
const mockTasks = [
    
        {
            id: 1,
            descr: "Todo 1",
            title: "First todo",
            deadline: "5 April 2021",
            stage: 0,
            participants: [
                {
                    name: "Peshko",
                    voted: true
                }
            ],
            subtasks: [                {
                id: 4,
                title: "Task 4",
                stage: 1
            }

            ]
        },
        {
            id: 3,
            descr: "Descr 3",
            title: "Todo 2",
            deadline: "28 April 2021",
            stage: 0,
            subtasks: [

                {
                    id: 2,
                    title: "Task 2",
                    stage: 2,
                },
                {
                    id: 4,
                    title: "Task 4",
                    stage: 1,
                },
                {
                    id: 1,
                    title: "First todo",
                    stage: 0,
                }
            ],
            participants: [
                {
                    name: "Peshko",
                    voted: false
                }
            ]
        },
        {
            id: 4,
            descr: "Descr 4",
            title: "Task 4",
            deadline: "8 April 2021",
            stage: 1,
            subtasks: [],
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
            stage: 1,
            subtasks:[
                {
                    id: 4,
                    title: "Task 4",
                    stage: 1,
                },
                {
                    id: 2,
                    title: "Task 2",
                    stage: 2,
                }
            ],
            participants: [
                {
                    name: "Peshko",
                    voted: false
                }
            ]
        },
        { 
            id: 2, 
            descr: "Descr 2", 
            title: "Task 2", 
            deadline: "6 April 2021",
            stage: 2,
            subtasks: [],
            participants: [
                {
                    name: "Peshko",
                    voted: false
                }
            ]
        }

];

export default mockTasks;