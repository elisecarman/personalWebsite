import React, { useState } from 'react';
import { Text, Flex, Spacer } from '@chakra-ui/react';
import classes from './general.module.css';
 
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
 
      <Spacer />
 
      <Flex alignItems="center">
        <Text fontSize="15px">
        <a href="https://www.linkedin.com/in/elise-carman-9914b6154/" class="link">LinkedIn</a>
        </Text>
        <div style={{width: 20}}></div>
        <Text fontSize="15px">
        <a href="https://github.com/elisecarman" class="link">GitHub</a>
        </Text>
      </Flex>
    </Flex>
    </div>
  );
};
 
export default Nav; 