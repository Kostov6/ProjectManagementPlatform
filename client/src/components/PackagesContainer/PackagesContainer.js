import React, { Component } from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import "./PackagesContainer.css"
import Package from '../Package/Package'

export default class PackagesContainer extends Component {

    state = {
        packages : []
    }

    componentDidMount(){
        const fetchPackages = async () => {
            const owner = this.props.match.params.owner;
            const project = this.props.match.params.project
            const result = await fetch(`http://localhost:3001/api/packages/all/${owner}/${project}`)
            const resultData = await result.json()
            this.setState({packages: resultData})
        }
        
        fetchPackages();
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
                        {
                            this.state.packages.map(packageEl => (
                                <Link to={`/home/dashboard/${this.props.match.params.owner}/${this.props.match.params.project}/packageEdit/${packageEl._id}`}>
                                    <Package id={packageEl._id} title={packageEl.packageTitle} startDateString={packageEl.packageStartDate} endDateString={packageEl.packageEndDate}/>
                                </Link>
                            ))
                        }

                    </div>
                    <div className="PackagesContainer-outerContainer">
                        <Link to={`/home/dashboard/${this.props.match.params.owner}/${this.props.match.params.project}/packageAdd`} className="waves-effect waves-light btn-large PC_addPackage">Add package</Link>
                    </div>
                </div>
            </div>
        )
    }
}
