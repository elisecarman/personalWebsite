import logo from './logo.svg';
import './App.css';
import {Row, Col} from "react-bootstrap";
import Nav from './components/Nav';
import { Link , Outlet} from "react-router-dom";
import { Text, Box, Flex, Spacer, Image} from '@chakra-ui/react';
import classes from './components/general.module.css';
import art1 from './assets/artwork1.png';
import art3 from './assets/artwork3.png';
import art4 from './assets/artwork4.png';
import art5 from './assets/artwork5.png';
import 'animate.css';

function App() {
  return (
    
     
    <Box>
       <div className={classes.bg}> 
        <Nav/>
     </div>
     <Outlet/>
    </Box>
   
  );
}

export default App;
