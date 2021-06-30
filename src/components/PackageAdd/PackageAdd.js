import React from 'react'
import PackageEdit from '../PackageEdit/PackageEdit'
export default function PackageAdd() {
    return (
        <PackageEdit type="Add package" packageTitle="" packageStartDate={new Date().toDateString().split(" ").slice(1).toString().replaceAll(',',' ')} packageEndDate=""/>
    )
}
