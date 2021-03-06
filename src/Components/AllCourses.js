import { React, useEffect, useState } from 'react';
import Course from './Course';
import base_url from '../Api/BootApi'
import axios from "axios";

import { toast } from 'react-toastify';

const AllCourses=()=>{


    useEffect(
        ()=>{document.title="All Course"
        getAllCoursesFromServer();    
    }, []);

    
    const getAllCoursesFromServer =()=> {
        axios.get(`${base_url}/courses`).then(
        (response)=>{
                console.log(response);
                toast.success("Data Loaded");
                setCourses(response.data);
        },
        (error)=>{
                console.log(error);
        }
        )
    };

    const [courses,setCourses]=useState([])

    const updateCourses=(id)=>{
        setCourses(courses.filter((e)=> e.courseID!==id ))
    };
    const addCourse=(course)=>{
        setCourses(courses.filter((e)=> (e.courseID===course.courseID ? (e.courseTitle=course.courseTitle) && (e.courseDescription=course.courseDescription) : e) ))
    }
    return(
        <div>
                {courses.length > 0 
                ? courses.map((item)=><Course course={item} update={updateCourses} add={addCourse} />) 
                : "no courses"}
        </div>
            
    )
}

export default AllCourses;