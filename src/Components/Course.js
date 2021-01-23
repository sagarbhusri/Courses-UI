import axios from 'axios';
import {React ,useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import image from '../logo.svg'
import base_url from '../Api/BootApi'
//import {Button ,Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Col, Form, FormGroup, Label, Input, Button,  Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg } from 'reactstrap';


const Course=({course,update,add})=>{
  
  
    const notify = () => toast.warn("Wow so easy !",  {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        });

  

const deleteFromDataBase=(courseId)=>{
  console.log(courseId);
   axios.delete(`${base_url}/courses/${courseId}`).then
   (
     (success)=>{
      console.log("Course Deleted");
       toast.success("Course Deleted");
       update(courseId);
     },
     (error)=>{
      console.log(console.error());
     }
   )
 }
 const [open, setOpen] = useState(false);
 const [updateCourse, setupdateCourse] = useState({});

 const handleClickOpen = () => {
  setupdateCourse({...updateCourse,courseID:course.courseID})
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

    const formhandler=(e)=>{
      console.log(updateCourse);
      updateCourses(updateCourse);
      e.preventDefault();
    }
const updateCourses = (updatedCourse) => {
  console.log(updateCourse);
   axios.put(`${base_url}/courses`,updateCourse).then(
     (success)=>{
       console.log("Course Updated");
        toast.success("Course Updated");
        update(course.courseID);
        add(updateCourse);
        setOpen(false);
     },
   (error)=>{console.log(console.error());}
   )
};

    return(
        <div style={{paddingtop:10, paddingBottom:20}}>
        <ToastContainer />
      <Card className="text-center" body color="" >
        <CardImg top  src= {image} alt="Card image cap" style={{height:100 }} />
        <CardBody>
          <CardTitle tag="h5">Course Id: {course.courseID}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{course.courseTitle}</CardSubtitle>
          <CardText>{course.courseDescription}</CardText>
          <Button color="danger" onClick={()=>deleteFromDataBase(course.courseID)}>Delete</Button>
          <Button color="warning ml-3" onClick={handleClickOpen}>Update</Button>
        </CardBody>
      </Card>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update Details</DialogTitle>
        <DialogContent>
          <DialogContentText>  
          
                  <Form onSubmit={formhandler}>
            <FormGroup row>
              <Label for="courseId" sm={2}>Course Id :</Label>
              <Col sm={10}>
              <Label  sm={2}>{course.courseID}</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="courseTitle" sm={2}>Course Title :</Label>
              <Col sm={10}>
                <Input type="text" name="courseTitle" id="courseTitle" placeholder={course.courseTitle} onChange={(e)=>{setupdateCourse({...updateCourse,courseTitle:e.target.value})}}/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="courseDes" sm={2}>Course Description</Label>
              <Col sm={10}>
                <Input type="textarea" name="courseDes" id="courseDes" placeholder={course.courseDescription}  onChange={(e)=>{setupdateCourse({...updateCourse,courseDescription:e.target.value})}} />
              </Col>
            </FormGroup>
            { <FormGroup check row>
              <Col sm={{ size: 10, offset: 2 }}>
                <Button type="submit" color="success" >Add</Button>
                <Button type="reset" color="warning ml-2">Clear</Button>
              </Col>
            </FormGroup> }
            </Form>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
    )
};

export default Course;