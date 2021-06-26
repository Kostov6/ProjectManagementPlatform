import React from 'react'
import PropTypes from 'prop-types'
import "./Package.css"

function Package({title,packageWidth,leftProgression}) {
    return (
        <div className="Package-packageRow">
            <div className="Package-package" style={{ width: packageWidth, marginLeft: leftProgression }}>
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

