import React from 'react'
import './InviteHandle.css'
import {POST} from '../../util/fetchUtil'
import { useParams } from 'react-router'

export default function InviteHandle() {

    let { project , inviter} = useParams();

    async function accept(){
        console.log("accepting")
        POST(`http://localhost:3001/api/invites/accept/${inviter}/${project}`,{})
    }

    function decline(){
        console.log("declining")
        POST(`http://localhost:3001/api/invites/decline/${inviter}/${project}`,{})
    }

    return (
        <div className="TaskEdit_outerContainer">
        <div className="Task-card card">
            <div className="card-content waves-effect waves-block waves-light">
                <h4 className="">{`Accept invite from ${inviter} for project ${project}?`}</h4>
                <div className="row">
                    <a className="waves-effect waves-light btn" onClick={accept}>Accept</a>
                    <a className="waves-effect waves-light btn red PackageEdit_delete" onClick={decline}>Decline</a>
                </div>
            </div>
        </div>
    </div>
    )
}
