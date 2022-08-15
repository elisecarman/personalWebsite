import React from "react";
import classes from "./general.module.css";
import { Text, Box, Flex, Spacer } from '@chakra-ui/react';
import { Draggable } from "react-beautiful-dnd";
import { Image } from '@chakra-ui/react'

class Thanks extends React.Component {
    constructor(props) {
      super(props)
        };
      
  
    render() {
      return (
        <div>
        <div style={{height: 300}}></div>
        <div className={classes.intro}>
        
            
            <div style={{fontSize: 15}}>Thank you for visiting!</div>
            <div style={{height: 300}}></div>
        

        </div>
        </div>
      );
    }
}
  

export default Thanks;