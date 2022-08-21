import classes from "../components/resume.module.css"
import general from "../components/general.module.css"
import React from "react";

import Classes from "../components/cv_components/Classes"
import Skills from "../components/cv_components/Skills"
import Experiences from "../components/cv_components/Experiences"
import Projects from "../components/cv_components/Projects"
import Souvenir from "../components/cv_components/Souvenir"
import ListContainer from "../components/cv_components/ListContainer"
import CollectionContainer from "../components/cv_components/CollectionContainer"

import {Row, Col, Container} from "react-bootstrap";
import { Text, Box, Flex, Spacer, Image, Grid, GridItem } from '@chakra-ui/react';
import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import art5 from '../assets/artwork5.png';
import 'animate.css';


const grid = 8;

class Resume extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        classes : [
        { type: "classes", id : "0", content: { name : "Deep Learning", grade: "A"}},
        { type: "classes", id : "1", content: { name : "Cybersecurity and International Relations", grade: "A"}},
        { type: "classes", id : "2", content: { name : "Computer Systems", grade: "A"}},
        { type: "classes", id : "3", content: { name : "Blockchain Cryptocurrency", grade: "B"}},
        { type: "classes", id : "4", content: { name : "Computer Science: An Integrated Introduction", grade: "A"}},
        { type: "classes", id : "5", content: { name : "Computing Foundations: Data", grade: "A"}},
        { type: "classes", id : "6", content: { name : "Intermediate Multivariable Calculus", grade: "A"}}
        ],

        skills : [
            {type: "skills", id: "8", content:"Maven"},
            {type: "skills", id: "9", content:"SpringBoot"},
            {type: "skills", id: "10", content:"NodeJS"},
            {type: "skills", id: "11", content:"MySQL"},
            {type: "skills", id: "12", content:"Numpy"},
            {type: "skills", id: "13", content:"Git"},
            {type: "skills", id: "14", content:"Docker"},
            {type: "skills", id: "15", content:"Kubernetes"},
            {type: "skills", id: "16", content:"Jenkins"},
            {type: "skills", id: "17", content:"Tilt"},
            {type: "skills", id: "18", content:"Splunk"},
            {type: "skills", id: "19", content:"Postman"},
            {type: "skills", id: "20", content:"Cucumber"},
            {type: "skills", id: "21", content:"New Relic"},
            {type: "skills", id: "22", content:"Wiremock"},
            {type: "skills", id: "23", content:"Agile Workflow"},
            {type: "skills", id: "24", content:"Jira"},
            {type: "skills", id: "25", content:"Confluence"} 
            
        ],

        languages : [
            {type: "languages", id: "26", content:"Python"},
            {type: "languages", id: "27", content:"Java"},
            {type: "languages", id: "28", content:"JavaScript"},
            {type: "languages", id: "29", content:"HTML"},
            {type: "languages", id: "30", content:"CSS"},
            {type: "languages", id: "31", content:"Scala"},
            {type: "languages", id: "32", content:"C"},
            {type: "languages", id: "34", content:"C#"},
            {type: "languages", id: "35", content:"C++"},
            {type: "languages", id: "36", content:"Go Lang"},
            {type: "languages", id: "37", content:"Swift"},
            {type: "languages", id: "38", content:"Solidity"},
            {type: "languages", id: "39", content:"Pyret"},
        
        
        ],
        experiences : [
            {type: "experiences", id: "40", content: {where: "Anaplan: Software Engineer Intern", when: "(June-August 2022)", what: 
            ["Learned industry standards for CI/CD and gained familiarity with Docker, Kubernetes, Jenkins, Tilt, Splunk, Postman",
            "Worked within a full stack team following Agile workflow and Scrum Sprints",
            "Contributed on tickets involving e2e testing with Cucumber and Puppeteer, as well as front end contributions",
            "Facilitated the adoption of New Relic within my team for synthetic monitoring"]}},

            {type: "experiences", id: "41", content: {where: "Anthem AI: Software Engineer Intern", when: "(February-April 2022)", what: ["Created a prototype for the UI of a medical information display tool using React, gaining familiarity with Electron Forge, CSS, JavaScript, HTML and TypeScript"]}},
        
            {type: "experiences", id: "42", content: {where: "Anthem AI: Software Engineer Intern", when: "(June-August 2021)", 
            what: ["Created a V0 prototype for the UI of a medical information display tool using XCode and Swift",
                    "Tested UX hypothesis and reported to a design leader, gaining familiarity with Avocode and Zeplin",
                    "Gained knowledge of Jira and Confluence software"]}}
        ],
        projects : [
            {type: "projects", id: "43", content: {what: "Search", details: " an algorithm to index and query through a large database of information"}},
            {type: "projects", id: "45", content: {what: "Recommender", details: "a prediction algorithm trained on a collected dataset"}},
            {type: "projects", id: "46", content: {what: "BrunoCoin", details: "a non-optimized basic cryptocurrency- in class project"}},
            {type: "projects", id: "47", content: {what: "Shell", details: "a basic implementation of a shell interface"}},
            {type: "projects", id: "48", content: {what: "MNIST classifier", details: "a one layer neural network"}},
            {type: "projects", id: "49", content: {what: "CIFAR2 classifier", details: "a convolutional neural network"}},
            {type: "projects", id: "50", content: {what: "Variable Autoencoder on MNIST", details: "A Generative Adversarial Network generating new written numbers"}},
            {type: "projects", id: "51", content: {what: "Snark", details: "a multiplayer Unity Game – ongoing"}},
        ],
        souvenir : [],
        selected: []
      }
    };


        getList = id => this.state[id];

        reorder = (list, startIndex, endIndex) => {
            
            const result = Array.from(list);
            const [removed] = result.splice(startIndex, 1);
            result.splice(endIndex, 0, removed);
            return result;
        };

        move = (source, destination, droppableSource, droppableDestination) => {
            const sourceClone = Array.from(source);
            const destClone = Array.from(destination);
            const [removed] = sourceClone.splice(droppableSource.index, 1);
        
            destClone.splice(droppableDestination.index, 0, removed);
        
            const result = {};
            result[droppableSource.droppableId] = sourceClone;
            result[droppableDestination.droppableId] = destClone;
        
            return result;
        };

        onDragEnd = result => {
            console.log("got here")
            const { source, destination } = result;
    
            // dropped outside the list
            if (!destination) {
                return;
            }
    
            if (source.droppableId === destination.droppableId) {
                const items = this.reorder(
                    this.getList(source.droppableId),
                    source.index,
                    destination.index
                );
    
                let state = this.state
                state[source.droppableId] = items
    
                this.setState(state);
            } else {
                const result = this.move(
                    this.getList(source.droppableId),
                    this.getList(destination.droppableId),
                    source,
                    destination
                );

                let state = this.state
                state[source.droppableId] = result[source.droppableId]
                state[destination.droppableId] = result[destination.droppableId]

                this.setState({ state });
            }
        }
    

    getItemStyle = (isDragging, draggableStyle) => ({
        // some basic styles to make the items look a bit nicer
        userSelect: 'none',
        padding: grid * 0.5,
        margin: `0 0 1px 0`,
    
        // change background colour if dragging
        background: isDragging ? 'transparent' : 'tranparent',
    
        // styles we need to apply on draggables
        ...draggableStyle
    });
    
    getListStyle = isDraggingOver => ({
        background: isDraggingOver ? 'transparent' : 'transparent',
       /*  padding: grid, */
        width: "100%"
    });

    handleReset = () =>{
        
        this.setState({
            classes : [
                { type: "classes", id : "0", content: { name : "Deep Learning", grade: "A"}},
                { type: "classes", id : "1", content: { name : "Cybersecurity and International Relations", grade: "A"}},
                { type: "classes", id : "2", content: { name : "Computer Systems", grade: "A"}},
                { type: "classes", id : "3", content: { name : "Blockchain Cryptocurrency", grade: "B"}},
                { type: "classes", id : "4", content: { name : "Computer Science: An Integrated Introduction", grade: "A"}},
                { type: "classes", id : "5", content: { name : "Computing Foundations: Data", grade: "A"}},
                { type: "classes", id : "6", content: { name : "Intermediate Multivariable Calculus", grade: "A"}}
                ],
        
                skills : [
                    {type: "skills", id: "8", content:"Maven"},
                    {type: "skills", id: "9", content:"SpringBoot"},
                    {type: "skills", id: "10", content:"NodeJS"},
                    {type: "skills", id: "11", content:"MySQL"},
                    {type: "skills", id: "12", content:"Numpy"},
                    {type: "skills", id: "13", content:"Git"},
                    {type: "skills", id: "14", content:"Docker"},
                    {type: "skills", id: "15", content:"Kubernetes"},
                    {type: "skills", id: "16", content:"Jenkins"},
                    {type: "skills", id: "17", content:"Tilt"},
                    {type: "skills", id: "18", content:"Splunk"},
                    {type: "skills", id: "19", content:"Postman"},
                    {type: "skills", id: "20", content:"Cucumber"},
                    {type: "skills", id: "21", content:"New Relic"},
                    {type: "skills", id: "22", content:"Wiremock"},
                    {type: "skills", id: "23", content:"Agile Workflow"},
                    {type: "skills", id: "24", content:"Jira"},
                    {type: "skills", id: "25", content:"Confluence"} 
                    
                ],
        
                languages : [
                    {type: "languages", id: "26", content:"Python"},
                    {type: "languages", id: "27", content:"Java"},
                    {type: "languages", id: "28", content:"JavaScript"},
                    {type: "languages", id: "29", content:"HTML"},
                    {type: "languages", id: "30", content:"CSS"},
                    {type: "languages", id: "31", content:"Scala"},
                    {type: "languages", id: "32", content:"C"},
                    {type: "languages", id: "34", content:"C#"},
                    {type: "languages", id: "35", content:"C++"},
                    {type: "languages", id: "36", content:"Go Lang"},
                    {type: "languages", id: "37", content:"Swift"},
                    {type: "languages", id: "38", content:"Solidity"},
                    {type: "languages", id: "39", content:"Pyret"},
                
                
                ],
                experiences : [
                    {type: "experiences", id: "40", content: {where: "Anaplan: Software Engineer Intern", when: "(June-August 2022)", what: 
                    ["Learned industry standards for CI/CD and gained familiarity with Docker, Kubernetes, Jenkins, Tilt, Splunk, Postman",
                    "Worked within a full stack team following Agile workflow and Scrum Sprints",
                    "Contributed on tickets involving e2e testing with Cucumber and Puppeteer, as well as front end contributions",
                    "Facilitated the adoption of New Relic within my team for synthetic monitoring"]}},
        
                    {type: "experiences", id: "41", content: {where: "Anthem AI: Software Engineer Intern", when: "(February-April 2022)", what: ["Created a prototype for the UI of a medical information display tool using React, gaining familiarity with Electron Forge, CSS, JavaScript, HTML and TypeScript"]}},
                
                    {type: "experiences", id: "42", content: {where: "Anthem AI: Software Engineer Intern", when: "(June-August 2021)", 
                    what: ["Created a V0 prototype for the UI of a medical information display tool using XCode and Swift",
                            "Tested UX hypothesis and reported to a design leader, gaining familiarity with Avocode and Zeplin",
                            "Gained knowledge of Jira and Confluence software"]}}
                ],
                projects : [
                    {type: "projects", id: "43", content: {what: "Search", details: " an algorithm to index and query through a large database of information"}},
                    {type: "projects", id: "45", content: {what: "Recommender", details: "a prediction algorithm trained on a collected dataset"}},
                    {type: "projects", id: "46", content: {what: "BrunoCoin", details: "a non-optimized basic cryptocurrency- in class project"}},
                    {type: "projects", id: "47", content: {what: "Shell", details: "a basic implementation of a shell interface"}},
                    {type: "projects", id: "48", content: {what: "MNIST classifier", details: "a one layer neural network"}},
                    {type: "projects", id: "49", content: {what: "CIFAR2 classifier", details: "a convolutional neural network"}},
                    {type: "projects", id: "50", content: {what: "Variable Autoencoder on MNIST", details: "A Generative Adversarial Network generating new written numbers"}},
                    {type: "projects", id: "51", content: {what: "Snark", details: "a multiplayer Unity Game – ongoing"}},
                ],
                souvenir : [],
        })
    }
  
    render(){

      return (
        <div className={general.bg}>
        <div className={general.mainPage2}>

        <Grid

            minH={"100vh"}
            templateRows='repeat(12, 1fr)'
            templateColumns='repeat(8, 1fr)'
            gap={4}
            >
    
    <GridItem colSpan={1} rowSpan={2} />
    <GridItem colSpan={3} rowSpan={2} >
    <div class = "animate__animated animate__fadeIn">
       <div className={classes.resume_intro}>Interact with my resume!</div> 
    </div>    
    </GridItem>
    <GridItem colSpan={4} rowSpan={2}>
        <Image src={art5}></Image>
    </GridItem>
    
    <GridItem colSpan={1} rowSpan={11} />
    <GridItem colSpan={6} >
    <div className={classes.legend}>
    <Flex> 
        
            <div className={classes.list2} style={{color :"white"}}>Legend</div>
            <div style={{height: 40, marginBottom: 20}} className={classes.legend_languages} > Coding Languages</div>
            <div style={{height: 40, marginBottom: 20}} className={classes.legend_skills}>Software Experience</div>
            <div style={{height: 40, marginBottom: 20}} className={classes.legend_projects}>Coding Projects</div>
            <div style={{height: 40, marginBottom: 20}} className={classes.legend_experiences}>Professional Experience</div>
            <div style={{height: 40, marginBottom: 20}} className={classes.legend_classes}>University Classes</div>
         
    </Flex>
    </div>  
    </GridItem>
    

    <GridItem colSpan={1} rowSpan={11} />

  <GridItem rowSpan={10} colSpan={6} > 
  <DragDropContext onDragEnd={this.onDragEnd}>
            <Box>
            <Flex>
                <Box>
                <Flex>
                <Box>
                <CollectionContainer
                getItemStyle = {this.getItemStyle}
                getListStyle = {this.getListStyle}
                itemList = {this.state.skills}
                droppableId = "skills"
                col_target = {3}>
                </CollectionContainer> 

                <CollectionContainer
                getItemStyle = {this.getItemStyle}
                getListStyle = {this.getListStyle}
                itemList = {this.state.languages}
                droppableId = "languages"
                col_target = {3}
                />
                <ListContainer
                getItemStyle = {this.getItemStyle}
                getListStyle = {this.getListStyle}
                itemList = {this.state.experiences}
                droppableId = "experiences"
                />
                <CollectionContainer
                getItemStyle = {this.getItemStyle}
                getListStyle = {this.getListStyle}
                itemList = {this.state.classes}
                droppableId = "classes"
                col_target = {2}>
                </CollectionContainer> 
                </Box>
                <ListContainer
                getItemStyle = {this.getItemStyle}
                getListStyle = {this.getListStyle}
                itemList = {this.state.projects}
                droppableId = "projects"
                />
            </Flex>
            </Box>
        <Souvenir
        getItemStyle = {this.getItemStyle}
        getListStyle = {this.getListStyle}
        itemList = {this.state.souvenir}
        droppableId = "souvenir"
        handleReset = {this.handleReset}></Souvenir>
        </Flex>
       </Box>    
    </DragDropContext>
  </GridItem>
</Grid>

    </div>
    </div>
      );
    }
}
        
  

export default Resume;
