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
        <Text fontSize={{ base: '11px', md: '13px', lg: '15px' }}>
        <div className={classes.skills}>
        {this.props.name}
        </div>
        </Text>
      );
    }
}
  

export default Skills;
