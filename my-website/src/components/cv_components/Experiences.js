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
            <Box >
                <Flex> 
                    <div className={classes.exp_where}>
                    {this.props.where} 
                    </div>
                    <Spacer/>
                    <div className={classes.exp_when}>
                    {this.props.when}
                    </div>
                    </Flex>
                
                {this.props.abbreviated ? <div/> : 
                    <div>
                    <div className={classes.lil_dash}/>
                    {this.props.what.map((sentence) =>(
                  
                    <Text fontSize={{ base: '11px', md: '13px', lg: '14px' }}>
                    <div className={classes.exp_what}> {sentence} <br></br></div>
                    </Text>
                ))}
                </div>
               }
          </Box>
      </div>
    
      );
    }
}
  

export default Experiences;
