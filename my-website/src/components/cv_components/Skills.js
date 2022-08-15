import React from "react";
import classes from "../resume.module.css";
import { Text, Box, Flex, Spacer } from '@chakra-ui/react';
import { Draggable } from "react-beautiful-dnd";

class Skills extends React.Component {
    constructor(props) {
      super(props)
        };
      
  
    render() {
      return (
        
        <div className={classes.skills}>
        {this.props.name}
        </div>
      );
    }
}
  

export default Skills;
