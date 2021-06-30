import React, { Component } from 'react'
import PackagesContainer from './components/PackagesContainer/PackagesContainer';
import TasksContainer from './components/TasksContainer/TasksContainer';
import TaskEdit from './components/TaskEdit/TaskEdit';
import AddTask from './components/AddTask/AddTask';
import PackageEdit from './components/PackageEdit/PackageEdit';
import PackageAdd from './components/PackageAdd/PackageAdd';
import ProjectOverview from './components/ProjectOverview/ProjectOverview';
import ProjectSidenav from './components/ProjectSidenav/ProjectSidenav';
export default class App extends Component {

    render() {
        return (
            <React.Fragment>
                <h1>Component testing</h1>
                
                <ProjectOverview participants={["Penchi","Cho4i","Bochi"]}></ProjectOverview>
                <ProjectSidenav></ProjectSidenav>
                
                <PackagesContainer />
                <PackageAdd></PackageAdd>
                <PackageEdit packageTitle="Initializing" packageStartDate="1 Apr 2021" packageEndDate="10 Sep 2021"/>
                <TasksContainer />
                <TaskEdit taskTitle="First todo" taskDescr="Todo 1" taskDeadline="5 April 2021" allUsers={["TheChosen","BaiIvan","Peshko","Goiko","Pi4a96"]} participants={[true,false,false,false,false]} subTasks={["A","B","C"]}/>
                <AddTask />
            </React.Fragment>
        )
    }
}
