import { React, useEffect, useState } from 'react';
import {Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { ToastContainer, toast} from 'react-toastify';
import base_url from '../Api/BootApi'
import axios from 'axios';
const AddCourse=()=>{

  useEffect(
    ()=>{document.title="Add Course"
    }, []);

    const [course, setCourse]=useState({});

    const formhandler=(e)=>{
      console.log(course);
      postDatatoServer(course);
      e.preventDefault();
    }

    const postDatatoServer=(course)=>
    {
      axios.post(`${base_url}/courses`,course).then(
        (response)=>{
                console.log(response);
                toast.success("Data Added");
                setCourse({courseID:"",courseDescription:"",courseTitle:""})
              
        },
        (error)=>{
                console.log(error);
        }
        )
    }

    return (
      <div>
      <ToastContainer />
        <h1 className="text-center my-3 background-color:"> Fill The Details </h1>
        <Form onSubmit={formhandler}>
      <FormGroup row>
        <Label for="courseId" sm={2}>Course Id :</Label>
        <Col sm={10}>
          <Input type="courseId" name="courseId" id="courseId" placeholder="Enter Course Id Here" onChange={(e)=>{setCourse({...course,courseID:e.target.value})}}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="courseTitle" sm={2}>Course Title :</Label>
        <Col sm={10}>
          <Input type="courseTitle" name="courseTitle" id="courseTitle" placeholder="Enter Course Title Id Here" onChange={(e)=>{setCourse({...course,courseTitle:e.target.value})}}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="courseDes" sm={2}>Course Description</Label>
        <Col sm={10}>
          <Input type="textarea" name="courseDes" id="courseDes" onChange={(e)=>{setCourse({...course,courseDescription:e.target.value})}}/>
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button type="submit" color="success" >Add</Button>
          <Button type="reset" color="warning ml-2">Clear</Button>
        </Col>
      </FormGroup>
      </Form>
      </div>
    )
}

export default AddCourse;