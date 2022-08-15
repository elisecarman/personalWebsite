import React from "react";
import classes from "./general.module.css";
import { Text, Box, Flex, Spacer } from '@chakra-ui/react';
import { Draggable } from "react-beautiful-dnd";
import { Image } from '@chakra-ui/react'

class Welcome extends React.Component {
    constructor(props) {
      super(props)
        };
      
  
    render() {
      return (
        
        <div className={classes.welcome}>
        <div className={classes.intro}>
        
            <Box>
            <div style={{height: 300}}></div>
            <div style={{fontSize: 30}}>Welcome</div>
            <br></br>
            <Flex>
            My name is Elise Carman
            <br></br>
            I am a software developer at Brown University
            </Flex>
            <br>
            </br>
            interact with my resume!

            </Box>
        </div>
        </div>
      );
    }
}
  

export default Welcome;