import React from 'react'
import { Link } from "react-router-dom";
import M from 'materialize-css'

export default function ProjectSidenav() {
    //const [user, setUser] = React.useState({});
    //const [projects, setProjects] = React.useState([]);

    const [user, setUser] = React.useState({name:"loading...",email:"loading..."});
    const [projects, setProjects] = React.useState([])
    const [invites, setInvites] = React.useState([])

    React.useEffect(() => {
      const fetchUser = async () => {
        const userResponse = await fetch("http://localhost:3001/api/user");
        const { user } = await userResponse.json();
        console.log(user)
        
        setUser(user)
      };
      fetchUser();
    }, []);

    React.useEffect(() => {
        const fetchProjects = async () => {
            const projectsResponse = await fetch("http://localhost:3001/api/projects/allProjectNames/")
            const projects = await projectsResponse.json();
            console.log(projects)
            setProjects(projects)
        };
        fetchProjects();
    }, []);

    React.useEffect(() => {
        const fetchInvites = async () => {
            const invitesResponse = await fetch("http://localhost:3001/api/invites/allInvited/")
            const invites = await invitesResponse.json();
            console.log(invites)
            setInvites(invites)
        };
        fetchInvites();
    }, []);


    function closeSidenav(event){
        const elem = document.querySelector('.sidenav');
        const instance = M.Sidenav.getInstance(elem)
        instance.close()
    }    



    return (
        <React.Fragment>
            <ul id="slide-out" className="sidenav">
                <li><div className="user-view">
                    <div className="background">
                        <img src={`${process.env.PUBLIC_URL}/img/office.jpg`} />
                    </div>
                    <a href="#user"><img className="circle" src={`${process.env.PUBLIC_URL}/img/yuna.jpg`} /></a>
                    <a href="#name"><span className="white-text name">{user.name}</span></a>
                    <a href="#email"><span className="white-text email">{user.email}</span></a>
                </div></li>
                <li><Link to="/home/empty/createProject" onClick={closeSidenav}><i className="material-icons">add</i>Create a new project</Link></li>
                {
                    projects.map(project => (
                        <li key={project}><Link  to={`/home/dashboard/${project.split(" by ")[0]}`} onClick={closeSidenav}>{project}</Link></li>
                    ))
                }
                <li><div className="divider"></div></li>
                <li><a className="subheader">Invitations</a></li>
                {
                    invites.map(invite => (
                        <li key={invite}><Link to={`/home/dashboard/${invite.split(" by ")[0]}/acceptInvite/${invite.split(" by ")[1]}`} onClick={closeSidenav}>{invite}</Link></li>
                    ))
                }
            </ul>
       </React.Fragment>
    )
}
