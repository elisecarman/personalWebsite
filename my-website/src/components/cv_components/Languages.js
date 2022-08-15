import React from "react";
import classes from "../resume.module.css"

class Languages extends React.Component {
    constructor(props) {
      super(props)
        };
      
  
    render() {
      return (
        <div className={classes.languages}>
            {this.props.name}
        </div>
      );
    }
}
  

export default Languages;