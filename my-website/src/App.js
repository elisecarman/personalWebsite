import logo from './logo.svg';
import './App.css';
import {Row, Col} from "react-bootstrap";
import Nav from './components/Nav';
import { Text, Box, Flex, Spacer } from '@chakra-ui/react';
import classes from './components/general.module.css';
import Resume from './components/cv_components/Resume';
import Welcome from './components/Welcome';
import Thanks from './components/Thanks';

function App() {
  return (
    
     
    <Box>
      <div className={classes.bg}>
      <Nav/>
      
      <div className= {classes.mainPage}>
      
      <Welcome/>
      <Resume></Resume>
      <Thanks></Thanks>
      
      </div>
      
      </div>
    </Box>
   
  );
}

export default App;
