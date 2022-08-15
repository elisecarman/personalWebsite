import React from "react";
import classes from "../resume.module.css"
import { Text, Box, Flex, Spacer } from '@chakra-ui/react';

class Classes extends React.Component {
    constructor(props) {
      super(props)
        };
      
  
    render() {
      return (
        <div className={classes.classes}>
            <Box>
            <Flex>
                <Spacer/>
                <div className={classes.grade}>
                {this.props.grade}
                </div>
            </Flex>
            <hr></hr>
            <div className={classes.class}>
            {this.props.name}
            </div>
            </Box>
        </div>
      );
    }
}
  

export default Classes;
