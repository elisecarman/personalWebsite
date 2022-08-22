import React, { useState } from 'react';
import { Text, Flex, Spacer, textDecoration } from '@chakra-ui/react';
import classes from './general.module.css';
import { Link , Outlet, NavLink} from "react-router-dom";
import { hover } from '@testing-library/user-event/dist/hover';
/* import art4 from './assets/artwork4.png';
 */
const Nav = () => {
  const [scroll, setScroll] = useState(false);
 
  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);
 
  window.addEventListener('scroll', changeScroll);
 
  return (
    <div className={classes.nav}>
    <Flex
      h="10vh"
      alignItems="center"
      p="6"
      boxShadow={scroll ? 'base' : 'none'}
      position="sticky"
      top="0"
      zIndex="sticky"
      w="full"
    >
      <Text fontSize="25px" fontWeight="bold">
        Elise Carman website
      </Text>
      <div style={{width: "40px"}}></div>
      <NavLink 
      style={({ isActive }) => {
        return {
          color: isActive ? "white" : "",
          border: isActive ? "dotted 2px" : "none",
          borderRadius: isActive ? "5px" : "",
          /* padding: "5px", */
          textDecoration: "none",
          
        };
      }}
      className={classes.nav_items} 
      to="/"
      >
      <div className={classes.nav_single}>
        Home
      </div></NavLink>
      

      <NavLink 
      style={({ isActive }) => {
        return {
          color: isActive ? "white" : "",
          border: isActive ? "dotted 2px" : "none",
          borderRadius: isActive ? "5px" : "",
          textDecoration: "none",
          
        };
      }}
      className={classes.nav_items} 
      to="/resume">
      <div className={classes.nav_single}>
        Resume
      </div>
      </NavLink>
      <Spacer />
 
      <Flex alignItems="center">
        <Text fontSize="15px">
        <a href="https://www.linkedin.com/in/elise-carman-9914b6154/" class={classes.nav_single}>LinkedIn</a>
        </Text>
        <div style={{width: 20}}></div>
        <Text fontSize="15px">
      <a href="https://github.com/elisecarman" class={classes.nav_single}>GitHub</a>
        </Text>
      </Flex>
    </Flex>
    </div>
  );
};
 
export default Nav; 