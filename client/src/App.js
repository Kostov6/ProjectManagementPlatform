import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import PackagesContainer from './components/PackagesContainer/PackagesContainer';
import TasksContainer from './components/TasksContainer/TasksContainer';
import TaskEdit from './components/TaskEdit/TaskEdit';
import AddTask from './components/AddTask/AddTask';
import PackageEdit from './components/PackageEdit/PackageEdit';
import PackageAdd from './components/PackageAdd/PackageAdd';
import ProjectOverview from './components/ProjectOverview/ProjectOverview';
import ProjectSidenav from './components/ProjectSidenav/ProjectSidenav';
import InviteHandle from './components/InviteHandle/InviteHandle';
import CreateProject from './components/CreateProject/CreateProject';
import M from 'materialize-css';

export default function App() {
    const handleSidenavOpen = () => {
        const elem = document.querySelector('.sidenav');
        const instance = M.Sidenav.getInstance(elem)
        instance.open()
    }

        return (
            <Router>
               
                <Route path="/home"><ProjectSidenav /></Route>
                <Route path="/home/empty">
                    <nav>
                        <div className="nav-wrapper">
                            <a href="#" className="brand-logo">Home</a>
                            <ul id="nav-mobile" className="left hide-on-med-and-down">
                                <li><a><i className="material-icons PO_sidebar" onClick={handleSidenavOpen}>menu</i></a></li>
                            </ul>
                        
                        </div>
                    </nav>
                </Route>
                <Route path="/home/empty/createProject">
                    <CreateProject />
                </Route>
                <Route path="/home/dashboard/:owner/:project" component={ProjectOverview}></Route>

                <Route path="/home/dashboard/:owner/:project/taskAdd" component={AddTask}></Route>
                <Route path="/home/dashboard/:owner/:project/taskEdit/:taskId" component={TaskEdit}>
                </Route>
                <Route path="/home/dashboard/:owner/:project/packageAdd">
                    <PackageAdd /></Route>
                <Route path="/home/dashboard/:owner/:project/packageEdit/:packageId" component={PackageEdit} />
                <Route path="/home/dashboard/:owner/:project/packagesContainer" component={PackagesContainer} />

                <Route path="/home/dashboard/:owner/:project/tasksContainer" component={TasksContainer}>
                
                </Route>
                <Route path="/home/dashboard/:owner/:project/acceptInvite/">
                    <InviteHandle inviter="Goiko" project="CoolProject" />
                </Route>
                <Route path="/home/dashboard/:owner/:project/createProject">
                    <CreateProject />
                </Route>
            </Router>
        )

    
}
/*
                <Switch>
                    <Route path="/taskAdd">
                        <ProjectOverview participants={["Penchi","Cho4i","Bochi"]}></ProjectOverview>
                        <AddTask />
                    </Route>
                    <Route path="/taskEdit">
                        <ProjectOverview participants={["Penchi","Cho4i","Bochi"]}></ProjectOverview>
                        <TaskEdit taskTitle="First todo" taskDescr="Todo 1" taskDeadline="5 April 2021" allUsers={["TheChosen","BaiIvan","Peshko","Goiko","Pi4a96"]} participants={[true,false,false,false,false]} subTasks={["A","B","C"]}/>
                    </Route>
                    <Route path="/packageAdd">
                        <ProjectOverview participants={["Penchi","Cho4i","Bochi"]}></ProjectOverview>
                        <PackageAdd /></Route>
                    <Route path="/packageEdit">
                        <ProjectOverview participants={["Penchi","Cho4i","Bochi"]}></ProjectOverview>
                        <PackageEdit packageTitle="Initializing" packageStartDate="1 Apr 2021" packageEndDate="10 Sep 2021"/>
                    </Route>
                    <Route path="/packagesContainer">
                        <ProjectOverview participants={["Penchi","Cho4i","Bochi"]}></ProjectOverview>
                        <PackagesContainer />
                    </Route>
                    <Route path="/tasksContainer">
                        <ProjectOverview participants={["Penchi","Cho4i","Bochi"]}></ProjectOverview>
                        <TasksContainer />
                    </Route>
                    <Route path="/acceptInvite">
                        <ProjectOverview participants={["Penchi","Cho4i","Bochi"]}></ProjectOverview>
                        <InviteHandle inviter="Goiko" project="CoolProject" />
                    </Route>
                    <Route path="/createProject">
                        <ProjectOverview participants={["Penchi","Cho4i","Bochi"]}></ProjectOverview>
                        <CreateProject />
                    </Route>
                    <Route path="/project/:project" component={ProjectOverview}></Route>
                </Switch>
function TestWrapper(){

    const handleInvite = (event) => {
        console.log("invite initialie")
    }
    
    const handleStarred = (event) => {
        console.log("star initialie")
        fetch("http://localhost:3001/test")
            .then(res => res.json())
            .then(data => console.log(data));
    }
    
    const handleSidenavOpen = () => {
        const elem = document.querySelector('.sidenav');
        const instance = M.Sidenav.getInstance(elem)
        instance.open()
    }

    //return (<ProjectOverview projectTitle={project} participants={["Penchi","Cho4i","Bochi"]}></ProjectOverview>)
    return (
        <nav>
            <div className="nav-wrapper">
            <a href="#" className="brand-logo">{project}</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><a><i className="material-icons PO_sidebar" onClick={handleSidenavOpen}>menu</i></a></li>
            </ul>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/packagesContainer"><i className="material-icons PO_packageView" >assignment</i></Link></li>
                <li><Link to="/tasksContainer"><i className="material-icons PO_taskView">assignment_turned_in</i></Link></li>
                <li><Link to="/taskAdd"><i className="material-icons PO_taskAdd">library_add</i></Link></li>
                <li><a><i className="material-icons ProjectOverview_star" onClick={handleStarred}>star_border</i></a></li>
                <li>
                    <div className=" input-field col s12">
                        <i className="material-icons prefix inviteButton" onClick={handleInvite}>group_add</i>
                        <input id="inviteField" type="text" className="validate" />
                        <label htmlFor="inviteField"></label>
                    </div>
                </li>
                <li>
                    <div className="Participants-chip-container">
                    {
                        ( ["Penchi","Cho4i","Bochi"] ).map(participant => (
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


*/