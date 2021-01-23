import axios from 'axios';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {Button,  Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg } from 'reactstrap';
import image from '../logo.svg'
import base_url from '../Api/BootApi'
//import {Button ,Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
const Course=({course,update})=>{
  

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

const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
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
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Course ID : {course.courseID}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose} color="primary">
            Submit
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    )
};

export default Course;