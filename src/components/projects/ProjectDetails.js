import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem Ipsum Text</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Kayla Duffy</div>
                    <div>Sep 1, 2020 at 10am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails