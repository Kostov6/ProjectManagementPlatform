import React from 'react'
import PropTypes from 'prop-types'
import "./Package.css"

function Package({title, startDateString, endDateString}) {

    function getLeftProgression(){
        const startDate = new Date(startDateString)
        const thisDate = new Date()
        //is from last year
        if(startDate.getFullYear() < thisDate.getFullYear()) {return "0px"}
        //is from next year
        if(startDate.getFullYear() > thisDate.getFullYear()) {return "900px"}
        //is from this year
        return ((startDate.getMonth() + (1 - (31-startDate.getDate())/31.0))*75)+"px"
        

    }

    function getPackageWidth(){
        const startDate = new Date(startDateString)
        const endDate = new Date(endDateString)
        const thisDate = new Date()
        //is from next year
        if(endDate.getFullYear() > thisDate.getFullYear()) {return (900-((startDate.getMonth() + (1 - (31-startDate.getDate())/31.0))*75))+"px"}
        //is prev year
        if(endDate.getFullYear() < thisDate.getFullYear()) {return "0px"}
        //is this year
        const monthDiff = (endDate.getMonth() - startDate.getMonth())
        const dayDiff = (endDate.getDate() - startDate.getDate())/31.0
        return ((monthDiff+dayDiff)*75)+"px"
    }

    return (
        <div className="Package-packageRow">
            <div className="Package-package" style={{ width: getPackageWidth(), marginLeft: getLeftProgression() }}>
                <div>{title}</div>
            </div>
        </div>
    )
}

Package.propTypes = {
    title: PropTypes.string.isRequired,
    packageWidth: PropTypes.string.isRequired,
    leftProgression: PropTypes.string.isRequired
}

export default Package

