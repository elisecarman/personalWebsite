import React from "react";

import classes from "../resume.module.css"
import { Text, Box, Flex, Spacer, Button, ButtonGroup } from '@chakra-ui/react';
import ListContainer from "./ListContainer";
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Classes from "./Classes";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Languages from "./Languages";
import Skills from "./Skills";
import JsPDF from 'jspdf';
import { CloseIcon, ArrowUpIcon } from '@chakra-ui/icons';

class Souvenir extends React.Component {
    constructor(props) {
      super(props)
        };
    
    render_item = (content, type) => {
        if (type == "classes"){
            return <Classes
            name = {content.name}
            grade = {content.grade}>

            </Classes>
        } else if (type == "skills"){
            return <Skills name = {content}></Skills>
        } else if (type == "experiences"){
            return <Experiences 
            where = {content.where}
            what = {content.what}
            when = {content.when}
            abbreviated = {true}
            ></Experiences>
        } else if (type == "projects"){
            return <Projects
            what = {content.what}
            details = {content.details}
            ></Projects>
        } else if (type == "languages"){
            return <Languages
            name = {content}></Languages>
        }
    };

    generatePDF = () => {
        const report = new JsPDF('portrait','pt','a4');
        report.html(document.querySelector('#report')).then(() => {
            report.save('report.pdf');
        });
    }
  
    render() {
      return (
        <div id ="report">
        <div className={classes.souvenir}>
            <Box>
            <div className={classes.so_name}> Elise Carman </div>
            <Flex>
                <Box>
                <div className={classes.so_grade}>Brown University</div>
                <div className={classes.so_grade}>expected graduation: January 2024 </div>
                </Box>
                <Spacer></Spacer>
                <div className={classes.so_gpa}> GPA: 3.81</div>
            </Flex>
            <div >
            <textarea className={classes.so_comment} placeholder={"Type in your thoughts"}>
            {/* Type in your thoughts */}
            </textarea>
            </div>
            <Box>
                <Flex>
                <div className={classes.buttons}>
                <Button 
                border='dotted 2px' 
                colorScheme='cyan' 
                variant='outline' 
                fontSize={"15"} 
                marginRight={"5"}
                onClick= {this.props.handleReset}
                >
                    Reset
                </Button>  
                
                <Button 
                border='dotted 2px' 
                colorScheme='cyan' 
                variant='outline' 
                fontSize={"15"} 
                marginLeft={"5"}
                onClick = {this.generatePDF}
                rightIcon = {<ArrowUpIcon/>}>
                    Export
                </Button>
                </div>
                </Flex>
                </Box>
                <div className={classes.so_drop}>
                <Droppable droppableId={this.props.droppableId}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        style={this.props.getListStyle(snapshot.isDraggingOver)}>
                        {this.props.itemList.length == 0 ? <div className={classes.isEmpty}>Drop souvenirs here!</div> :
                        this.props.itemList.map((item, index) => (
                            <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={this.props.getItemStyle(
                                            snapshot.isDragging,
                                            provided.draggableProps.style
                                        )}>
                                        {this.render_item(item.content, item.type)}
                                    </div>
                                )}
                    </Draggable>
                ))}
                {provided.placeholder}
            </div>
        )}
        </Droppable>


                </div>
                
            
            </Box>
            

        
        </div>
        </div>
      );
    }
}
  

export default Souvenir;
