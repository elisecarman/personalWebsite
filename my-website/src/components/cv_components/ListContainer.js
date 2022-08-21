import React from "react";
import classes from "../resume.module.css"
import Skills from "./Skills";
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Classes from "./Classes";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Languages from "./Languages";
import Souvenir from "./Souvenir";

class ListContainer extends React.Component {
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
            abbreviated = {false}
            ></Experiences>
        } else if (type == "projects"){
            return <Projects
            what = {content.what}
            details = {content.details}
            ></Projects>
        } else if (type == "languages"){
            return <Languages
            name = {content}></Languages>
        } else if (type == "souvenir"){
            return <Souvenir></Souvenir> 
        }
    };
  
    render(){
      return (
       
        
        <Droppable droppableId={this.props.droppableId} isDropDisabled={true}>
        {(provided, snapshot) => (
            <div
                ref={provided.innerRef}
                style={this.props.getListStyle(snapshot.isDraggingOver)}>
                {this.props.itemList.map((item, index) => (
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
                  
      )
    
}
}
  


export default ListContainer;