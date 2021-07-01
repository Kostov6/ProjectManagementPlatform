import React from 'react'
import PackageEdit from '../PackageEdit/PackageEdit'
import { useParams } from 'react-router'
export default function PackageAdd() {

    let { project , owner } = useParams();

    return (
        <PackageEdit project={project} owner={owner} type="Add package" packageTitle="" packageStartDate={new Date().toDateString().split(" ").slice(1).toString().replaceAll(',',' ')} packageEndDate=""/>
    )
}
