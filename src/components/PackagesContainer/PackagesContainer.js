import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./PackagesContainer.css"
import Package from '../Package/Package'

export default class PackagesContainer extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="PackagesContainer-outerContainer">
                <div className="PackageContainer-calendar">
                    <div className="PackageContainer-labelContainer">
                        <div>Jan 21</div>
                        <div>Jan</div>
                        <div>Jan</div>
                        <div>Jan</div>
                        <div>Jan</div>
                        <div>Jan</div>
                        <div>Jan</div>
                        <div>Jan</div>
                        <div>Jan</div>
                        <div>Jan</div>
                        <div>Jan</div>
                        <div>Jan</div>
                    </div>
                    <div>
                        <Package title="Package #1" packageWidth="150px" leftProgression="75px" />
                        <Package title="Package #2" packageWidth="375px" leftProgression="188px" />
                        <Package title="Package #3" packageWidth="175px" leftProgression="225px" />
                    </div>
                </div>
            </div>
        )
    }
}
