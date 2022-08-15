import React from "react";
import classes from "../resume.module.css"

class Projects extends React.Component {
    constructor(props) {
      super(props)
        };
      
  
    render() {
      return (
        <div className={classes.projects}>
            <div className={classes.pro_what}>
            {this.props.what}
            </div>
            <div className={classes.pro_details}>
            {this.props.details}
            </div>
        </div>
      );
    }
}
  

export default Projects;
