import React from "react";
import classes from "../resume.module.css"
import { Text, Box, Flex, Spacer } from '@chakra-ui/react';

class Experiences extends React.Component {
    constructor(props) {
      super(props)
        };
      
  
    render() {
        console.log(this.props.abbreviated)
      return (
        <div className={classes.experiences}>
            <Box>
                <Flex> 
                    <div className={classes.exp_where}>
                    {this.props.where} 
                    </div>
                    <Spacer/>
                    <div className={classes.exp_when}>
                    {this.props.when}
                    </div>
                    </Flex>
                
                {this.props.abbreviated ? <div/> : <div><div className={classes.lil_dash}/><div className={classes.exp_what}> {this.props.what}</div></div>}
           
                
            </Box>
        </div>
      );
    }
}
  

export default Experiences;
