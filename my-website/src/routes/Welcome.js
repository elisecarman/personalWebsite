import React from "react";
import classes from "../components/general.module.css";
import { Text, Box, Flex, Spacer, Grid, GridItem } from '@chakra-ui/react';
import { Draggable } from "react-beautiful-dnd";
import { Image } from '@chakra-ui/react';
import art1 from '../assets/artwork1.png';
import art3 from '../assets/artwork3.png';
import art4 from '../assets/artwork4.png';
import art5 from '../assets/artwork5.png';
import 'animate.css';

class Welcome extends React.Component {
    constructor(props) {
      super(props)
        };
      
  
    render() {
      return (
        
        <div className={classes.bg}>
        <div className={classes.mainPage}>
        {/* */}
            <div className={classes.img1}>
            {<Image src={art4}></Image> }
            </div>

            <Grid
              /* h='200px' */
              w={"100%"}
              
              /* minH={"100vh"} */
              templateRows='repeat(19, 1fr)'
              templateColumns='repeat(9, 1fr)'
              gap={4}
            >
              
            <GridItem colSpan={4} rowSpan={6}/>
            <GridItem colSpan={5} rowSpan={6}>
            
            <div className={classes.intro}>
            <div class="animate__animated animate__fadeInDown">
            <div style={{fontSize: 40}}>Welcome</div>
            My name is Elise Carman
            <br></br>
            I am a software developer at Brown University 
            </div>
            </div>
            </GridItem>
            
            <GridItem colSpan={9} rowSpan={10}> 
            <Box >
              <div className={classes.scroll_display}>
              <div className={classes.shadow_display}></div>
              
               {/* 
              <Text lineHeight={10} fontSize={21}> */}
              <div className={classes.scroll_text}>
                <br></br>
                <br></br>
              I have always been a creator. 
              <br></br>
              I am an illustrator, 
              <br></br>
              a fashion designer,
              <br></br>
              a Dungeons and Dragons enthusiast...
              <br></br>
              <br></br>
              I create new stories and new worlds constantly. 
              <br></br>
              <br></br>
              {/* 
              </Text> */}
              <div className={classes.spacer}/>{/* 
              <Text lineHeight={10} fontSize={21}> */}
              Studying computer science has only further expanded my ability to create, and with each new skill I learn I see this ability grow. 
              {/* 
                </Text> */}
                <div className={classes.spacer}/>{/* 
              <Text lineHeight={10} fontSize={21}> */}
                I chose computer science because I wanted to find a skill I would love to explore beyond the classroom or work, 
                <br></br>
                and find joy in truly mastering. 
                <br></br>
                <br></br>
                <br></br>
                Come along on my journey.
            {/* 
                </Text> */}
                </div>
                <div className={classes.spacer}/>
             
            
            </div> 
            </Box>
            </GridItem>
           
            <GridItem colSpan={9} rowSpan={3}  />
            </Grid>
           {/*  <Box>
           
            <Flex>
            
            <div className={classes.intro}>
            <Box>
              <div style={{fontSize: 40}}>Welcome</div>
            My name is Elise Carman
            <br></br>
            I am a software developer at Brown University 
            

            </Box>
            
            </div>
            </Flex>
            
            
            </Box>

             */}
        </div>
        </div>
      );
    }
}
  

export default Welcome;