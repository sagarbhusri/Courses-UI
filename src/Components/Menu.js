import React from "react";
import { Link } from "react-router-dom";
import { ListGroup} from "reactstrap";

const Menu=()=>{
    return (
    <ListGroup >
         <Link className="list-group-item list-group-item-action" tag="a" to="/" >Home</Link>    
        <Link className="list-group-item list-group-item-action" tag="a" to="/all-course">Courses</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/add-course">Add Courses</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/Header">Update Courses</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="#">Help</Link>  
    </ListGroup>
    )
}

export default Menu;