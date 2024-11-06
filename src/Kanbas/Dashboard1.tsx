import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as db from "./Database";
import { useSelector, useDispatch} from "react-redux";
import {
  enrollCourse,
  unenrollCourse,
  toggleViewAllCourses,
} from "./reducer";

export default function Dashboard(
  { courses, 
    course, 
    setCourse, 
    addNewCourse,
    deleteCourse, 
    updateCourse 
  }: {
    courses: any[]; 
    course: any; 
    setCourse: (course: any) => void;
    addNewCourse: () => void; 
    deleteCourse: (course: any) => void;
    updateCourse: () => void; }
) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = db;

  const [viewAllCourses, setViewAllCourses] = useState(false);


  const handleEnroll = (courseId: string) => {
    dispatch(enrollCourse(courseId )); // Dispatch enroll action
  };

  const handleUnenroll = (courseId: string) => {
    dispatch(unenrollCourse(courseId )); // Dispatch unenroll action
  };

  const toggleCourseView = () => {
    setViewAllCourses(!viewAllCourses);
    dispatch(toggleViewAllCourses());
  };

  // Filter courses based on enrollment status
  const filteredCourses = viewAllCourses
    ? courses
    : courses.filter((course) =>
        enrollments.some(
          (enrollment) => enrollment.user === currentUser._id && enrollment.course === course._id
        )
      );

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

      {currentUser.role === "STUDENT" && (
        <div className="d-flex justify-content-end mb-3">
          <button className="btn btn-info" onClick={toggleCourseView}>
            {viewAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
          </button>
        </div>
      )}
      
        <h5>New Course
        <button className="btn btn-primary float-end"
                id="wd-add-new-course-click"
                onClick={addNewCourse} > Add </button>

        <button className="btn btn-warning float-end me-2"
              onClick={updateCourse} id="wd-update-course-click">
        Update
      </button>
    </h5>

      <br />

      {currentUser.role === "FACULTY" && (
        <>
        <input 
        value={course.name} 
        className="form-control mb-2" 
        onChange={(e) => setCourse({ ...course, name: e.target.value }) }
        />
        <textarea 
        value={course.description} 
        className="form-control"
        onChange={(e) => setCourse({ ...course, description: e.target.value }) }
        /> 
        <br />
</>
      )}
      
      

      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
        {filteredCourses.map((course) => {
            const isEnrolled = enrollments.some(
              (enrollment) => enrollment.user === currentUser._id && enrollment.course === course._id
            );

            return (
              <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
                <div className="card rounded-3 overflow-hidden">
             
                    <img src={course.picture} width="100%" height={160} alt="Course Image" />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        <Link to={`/Kanbas/Courses/${course._id}/Home`} >{course.name}</Link></h5>
                      <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                        {course.description} 
                      </p>
                      
                      <button className="btn btn-primary"><Link to={`/Kanbas/Courses/${course._id}/Home`} 
                      style={{ color: 'white', textDecoration: 'none' }}
                      >Go </Link> </button>
                     

                      {currentUser.role === "FACULTY" && (
                        <>
                          <button id="wd-edit-course-click"
                                  onClick={(event) => {
                                    event.preventDefault();
                                    setCourse(course);
                                  }}
                                  className="btn btn-warning me-2 float-end">
                            Edit
                          </button>

                          <button onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }} className="btn btn-danger float-end" id="wd-delete-course-click">
                            Delete
                          </button>
                        </>
                      )}

                      {/* Enrollment button */}
                      {isEnrolled ? (
                        <button onClick={() => handleUnenroll(course._id)} className="btn btn-danger float-end me-2">
                          Unenroll
                        </button>
                      ) : (
                        <button onClick={() => handleEnroll(course._id)} className="btn btn-success float-end me-2">
                          Enroll
                        </button>
                      )}
                    
                  </div>
                
              </div>
            </div>
            );
})}
        </div>
      </div>
    </div>);}