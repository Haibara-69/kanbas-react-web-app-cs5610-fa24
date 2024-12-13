
// import { useNavigate } from "react-router-dom";

// export default function Dashboard({
//   courses,
//   course,
//   setCourse,
//   addNewCourse,
//   deleteCourse,
//   updateCourse,
//   enrolling,
//   setEnrolling,
//   updateEnrollment,
//   currentUser,
// }: {
//   courses: any[];
//   course: any;
//   setCourse: (course: any) => void;
//   addNewCourse: () => Promise<any>;
//   deleteCourse: (courseId: string) => void;
//   updateCourse: (updatedCourse: any) => void;
//   enrolling: boolean;
//   setEnrolling: (enrolling: boolean) => void;
//   updateEnrollment: (courseId: string, enrolled: boolean) => void;
//   currentUser: any;
// }) {
//   const navigate = useNavigate();

//   const handleAddNewCourse = async () => {
//     try {
//       if (!course.name || !course.description) {
//         alert("Please provide both course name and description.");
//         return;
//       }
//       // Add the new course
//       const newCourse = await addNewCourse();

//       // Automatically enroll the faculty user in the new course
//       await updateEnrollment(newCourse._id, true);

//       // Add the course to the state with enrollment status
//       setCourse({ ...course, name: "", description: "" });
//       alert(`Course "${newCourse.name}" created and enrolled successfully!`);
//     } catch (error) {
//       console.error("Failed to add and enroll in the new course:", error);
//     }
//   };

//   const handleNavigate = (courseId: string) => {
//     const course = courses.find((c) => c._id === courseId);
//     if (course?.enrolled || currentUser?.role === "ADMIN") {
//       navigate(`/Kanbas/Courses/${courseId}/Home`);
//     } else {
//       alert("You need to enroll in this course to view its content.");
//     }
//   };

//   const displayedCourses = enrolling
//     ? courses // Show all courses when enrolling state is active
//     : courses.filter((course) => course.enrolled); // Show only enrolled courses

//   return (
//     <div className="p-4" id="wd-dashboard">
//       <h1 id="wd-dashboard-title">
//         Dashboard
//         <button
//           onClick={() => setEnrolling(!enrolling)}
//           className="float-end btn btn-primary"
//         >
//           {enrolling ? "My Courses" : "All Courses"}
//         </button>
//       </h1>
//       <hr />
//       {currentUser?.role === "FACULTY" && (
//         <>
//           <h5>
//             New Course
//             <button
//               className="btn btn-primary float-end"
//               onClick={handleAddNewCourse} // Use the modified function
//             >
//               Add
//             </button>
//             <button
//               className="btn btn-warning float-end me-2"
//               onClick={() => updateCourse(course)}
//             >
//               Update
//             </button>
//           </h5>
//           <input
//             value={course?.name || ""}
//             className="form-control mb-2"
//             onChange={(e) => setCourse({ ...course, name: e.target.value })}
//           />
//           <textarea
//             value={course?.description || ""}
//             className="form-control"
//             onChange={(e) => setCourse({ ...course, description: e.target.value })}
//           />
//           <hr />
//         </>
//       )}
//       <h2 id="wd-dashboard-published">
//         {enrolling ? "All Courses" : "My Courses"} ({displayedCourses.length})
//       </h2>
//       <div id="wd-dashboard-courses" className="row g-4">
//         {displayedCourses.map((course) => (
//           <div className="wd-dashboard-course col-lg-4 col-md-6 col-sm-12" key={course._id}>
//             <div className="card shadow-sm rounded-3 overflow-hidden">
//               <div
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//                 onClick={() => handleNavigate(course._id)}
//                 style={{ cursor: "pointer" }}
//               >
//                 <img
//                   src={course.picture}
//                   alt={`${course.name} logo`}
//                   className="card-img-top"
//                   style={{ height: "180px", objectFit: "cover" }}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title text-truncate">{course.name}</h5>
//                   <p className="card-text text-muted text-truncate">
//                     {course.description || "No description available"}
//                   </p>
//                   <button className="btn btn-primary">Go</button>
//                   <div className="d-flex justify-content-between">
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         updateEnrollment(course._id, !course.enrolled);
//                       }}
//                       className={`btn ${
//                         course.enrolled ? "btn-outline-danger" : "btn-outline-success"
//                       } btn-sm`}
//                     >
//                       {course.enrolled ? "Unenroll" : "Enroll"}
//                     </button>
//                     {currentUser?.role === "FACULTY" && (
//                       <div>
//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             setCourse(course);
//                           }}
//                           className="btn btn-outline-warning btn-sm me-2"
//                         >
//                           Edit
//                         </button>
//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             deleteCourse(course._id);
//                           }}
//                           className="btn btn-outline-danger btn-sm"
//                         >
//                           Delete
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
//import * as courseClient from "./Courses/client";
//import * as enrollmentClient from "./Courses/client";
export default function Dashboard({
    courses, 
    course,
    setCourse,
    addNewCourse,
    deleteCourse,
    updateCourse,
    enrolling, 
    setEnrolling,
    updateEnrollment
}: {
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (course: any) => void;
    updateCourse: () => void;
    enrolling: boolean; 
    setEnrolling: (enrolling: boolean) => void;
    updateEnrollment: (courseId: string, enrolled: boolean) => void
}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [enrolledCourses, setEnrolledCourses] = useState<string[]>([]);
    const [showAllCourses, setShowAllCourses] = useState(false);
    const [allCourses, setAllCourses] = useState<any[]>([]); 
    const navigate = useNavigate();
/*
    useEffect(() => {
        const fetchEnrolled = async () => {
            if (currentUser) {
                const courses = await enrollmentClient.fetchEnrolledCourse(currentUser._id);
                setEnrolledCourses(courses);
            }
        };
        fetchEnrolled();
    }, [currentUser]);*/
 /*
    const toggleEnrollment = async (courseId: string) => {
        const isEnrolled = enrolledCourses.some((course: any) => course._id === courseId);
        if (isEnrolled) {
            await enrollmentClient.unenrollFromCourse(currentUser._id, courseId);
            setEnrolledCourses((prev) => prev.filter((course: any) => course._id !== courseId));
        } else {
            await enrollmentClient.enrollInCourse(currentUser._id, courseId);
            const course = allCourses.find((c: any) => c._id === courseId);
            if (course) {
                setEnrolledCourses((prev) => [...prev, course]);
            }
        }
    };

    const handleFetchAllCourses = async () => {
        if (!showAllCourses) {
            const courses = await courseClient.fetchAllCourses();
            setAllCourses(courses);
        }
        setShowAllCourses(!showAllCourses);
    };*/
/*
    const handleNavigate = (courseId: string) => {
        navigate(`/Kanbas/Courses/${courseId}/Home`);
    };*/
/*
    const handleUpdateCourse = async () => {
        await courseClient.updateCourse(course);
        const updatedCourses = await enrollmentClient.fetchEnrolledCourse(currentUser._id);
        setEnrolledCourses(updatedCourses);
    }
    const handleDeleteCourse = async (courseId: string) => {
        await courseClient.deleteCourse(courseId);
        const updatedCourses = await enrollmentClient.fetchEnrolledCourse(currentUser._id);
        setEnrolledCourses(updatedCourses);
    }*/
    //const displayedCourses = showAllCourses ? allCourses : enrolledCourses;
    return (
        <div className="p-4" id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard
                <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
                    {enrolling ? "My Courses" : "All Courses"}
                </button>
            </h1> <hr />
            {currentUser?.role === "FACULTY" && (
                <>
                    <h5>
                        New Course
                        <button className="btn btn-primary float-end" id="wd-add-new-course-click" onClick={addNewCourse}>
                            Add
                        </button>
                        <button className="btn btn-warning float-end me-2" onClick={updateCourse} id="wd-update-course-click">
                            Update
                        </button>
                    </h5>
                    <br />
                    <input
                        value={course.name}
                        className="form-control mb-2"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })}
                    />
                    <textarea
                        value={course.description}
                        className="form-control"
                        onChange={(e) => setCourse({ ...course, description: e.target.value })}
                    />
                    <hr />
                </>
            )}
            
            {/*currentUser?.role === "STUDENT" && (
                <button className="btn btn-primary float-end" onClick={handleFetchAllCourses}>
                    {showAllCourses ? "My Enrollments" : "All Courses"}
                </button>
            )*/}
            
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
            <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => {
                        return (
                            <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
                                <div className="card rounded-3 overflow-hidden">
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="wd-dashboard-course-link text-decoration-none text-dark"
                                    >
                                        < img src="/images/reactjs.jpg" width="100%" height={160} alt="Course logo" />
                                        <div className="card-body">
                                            <h5 className="wd-dashboard-course-title card-title">
                                                {enrolling && (
                                                    <button  onClick={(event) => {
                                                            event.preventDefault();
                                                            updateEnrollment(course._id, !course.enrolled);
                                                        }}
                                                        className={`btn ${ course.enrolled ? "btn-danger" : "btn-success" } float-end`} >
                                                        {course.enrolled ? "Unenroll" : "Enroll"}
                                                    </button>
                                                )}
                                                {course.name}
                                            </h5>
                                            <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                                {course.description}
                                            </p >
                                            <button onClick={() => navigate(`/Kanbas/Courses/${course._id}/Home`)} className="btn btn-primary">
                                                Go
                                            </button>
                                            {currentUser?.role === "FACULTY" && (
                                                <>
                                                    <button
                                                        onClick={(event) => {
                                                            //event.preventDefault();
                                                            event.stopPropagation();
                                                            deleteCourse(course._id);
                                                            //handleDeleteCourse(course._id);
                                                        }}
                                                        className="btn btn-danger float-end"
                                                        id="wd-delete-course-click"
                                                    >
                                                        Delete
                                                    </button>
                                                    <button
                                                        id="wd-edit-course-click"
                                                        onClick={(event) => {
                                                            //event.preventDefault();
                                                            event.stopPropagation();
                                                            setCourse(course);
                                                        }}
                                                        className="btn btn-warning me-2 float-end"
                                                    >
                                                        Edit
                                                    </button>
                                                </>
                                            )}
                                            
                                                {/*<button
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                        toggleEnrollment(course._id); 
                                                    }}
                                                    className={`btn float-end ${
                                                        enrolledCourses.some((c: any) => c._id === course._id)
                                                         ? "btn-danger" 
                                                         : "btn-success"
                                                    }`}
                                                >
                                                    {enrolledCourses.some((c: any) => c._id === course._id) 
                                                    ? "Unenroll" 
                                                    : "Enroll"}
                                                </button>*/}
                                            
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

