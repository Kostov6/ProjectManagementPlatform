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
                    <h3>{new Date().getFullYear()}</h3>
                    <div className="PackageContainer-labelContainer">
                        <div>Jan</div>
                        <div>Feb</div>
                        <div>Mar</div>
                        <div>Apr</div>
                        <div>May</div>
                        <div>Jun</div>
                        <div>Jul</div>
                        <div>Aug</div>
                        <div>Sep</div>
                        <div>Oct</div>
                        <div>Nov</div>
                        <div>Dec</div>
                    </div>
                    <div>
                        <Package title="Package #1" startDateString="1 Feb 2021" endDateString="31 Mar 2021"/>
                        <Package title="Package #2" startDateString="15 Mar 2021" endDateString="15 Aug 2021"/>
                        <Package title="Package #3" startDateString="1 Apr 2021" endDateString="10 Jun 2021"/>
                    </div>
                </div>
            </div>
        )
    }
}
