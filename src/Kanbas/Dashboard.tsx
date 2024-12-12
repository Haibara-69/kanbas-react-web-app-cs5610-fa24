import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import * as enrollmentClient from "./Courses/client";
import * as coursesClient from "./Courses/client";

export default function Dashboard({
    courses,
    course,
    setCourse,
    addNewCourse,
    deleteCourse,
    updateCourse,
}: {
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => Promise<any>; 
    deleteCourse: (courseId: string) => void;
    updateCourse: (updatedCourse: any) => void;
}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [enrolledCourses, setEnrolledCourses] = useState<string[]>([]);
    const [showAllCourses, setShowAllCourses] = useState(false);
    const navigate = useNavigate();
    const [newCourseIds, setNewCourseIds] = useState<string[]>([]);
    

    // Fetch enrolled courses on mount
    useEffect(() => {
        if (currentUser) {
            fetchEnrolledCourses(currentUser._id);
        }
    }, [currentUser]);

    const fetchEnrolledCourses = async (userId: string) => {
        try {
            const response = await enrollmentClient.getEnrolledCourses(userId);
            console.log("Enrolled courses response:", response);
            const enrolledCourseIds = response.map((course: any) => course._id);
            setEnrolledCourses(response.map((course: any) => course._id)); // Store only IDs
            console.log("Updated enrolledCourses state:", enrolledCourseIds);
        } catch (error) {
            console.error("Failed to fetch enrolled courses:", error);
        }
    };

    const toggleEnrollment = async (courseId: string) => {
        try {
            const isEnrolled = enrolledCourses.includes(courseId);
            if (isEnrolled) {
                await enrollmentClient.unenrollFromCourse(currentUser._id, courseId);
                setEnrolledCourses((prev) => prev.filter((id) => id !== courseId));
            } else {
                await enrollmentClient.enrollInCourse(currentUser._id, courseId);
                setEnrolledCourses((prev) => [...prev, courseId]);
            }
        } catch (error) {
            console.error("Failed to toggle enrollment:", error);
        }
    };

    const handleNavigate = (courseId: string) => {
        if (enrolledCourses.includes(courseId) || currentUser?.role === "ADMIN") {
            navigate(`/Kanbas/Courses/${courseId}/Home`);
        } else {
            alert("You need to enroll in this course to view its content.");
        }
    };

    

    const handleAddNewCourse = async () => {
        try {
            // Ensure the current course data is valid
            if (!course.name || !course.description) {
                alert("Please provide both course name and description.");
                return;
            }
    
            // Add the current course
            await addNewCourse();
    
            // Wait for the courses list to update and fetch the last course
            const updatedCourses = [...courses]; // Assume `courses` is updated by a parent/state management
            const newCourse = updatedCourses[updatedCourses.length - 1]; // Get the last course
    
            if (newCourse) {
                setNewCourseIds((prev) => [...prev, newCourse._id]);
                console.log("New course added:", newCourse);
    
                // Reset the input fields for a new course
                setCourse({ name: "", description: "" });
            }
        } catch (error) {
            console.error("Failed to add new course:", error);
            alert("An error occurred while adding the course. Please try again.");
        }
    };
   
    
    
    

    // const displayedCourses =
    // currentUser?.role === "FACULTY"
    //     ? courses.filter((course) =>
    //           newCourseIds.includes(course._id) || enrolledCourses.includes(course._id)
    //       ) // Faculty sees courses they created or are enrolled in
    //     : showAllCourses
    //     ? courses // Students see all courses when toggled
    //     : courses.filter((course) => enrolledCourses.includes(course._id)); // Students see only their enrolled courses

    const displayedCourses =
    currentUser?.role === "ADMIN" || currentUser?.role === "FACULTY"
        ? courses // Admin sees all courses
        : currentUser?.role === "FACULTY"
        ? courses.filter((course) =>
              newCourseIds.includes(course._id) || enrolledCourses.includes(course._id)
          ) // Faculty sees courses they created or are enrolled in
        : showAllCourses
        ? courses // Students see all courses when toggled
        : courses.filter((course) => enrolledCourses.includes(course._id)); // Students see only their enrolled courses

    
    return (
        <div className="p-4" id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />
            {currentUser?.role === "FACULTY" && (
                <>
                    <h5>
                        New Course
                        <button
                            className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={handleAddNewCourse}
                        >
                            Add
                        </button>
                        <button
                            className="btn btn-warning float-end me-2"
                            onClick={() => updateCourse(course)}
                            id="wd-update-course-click"
                        >
                            Update
                        </button>
                    </h5>
                    <input
                        value={course?.name || ""}
                        className="form-control mb-2"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })}
                    />
                    <textarea
                        value={course?.description || ""}
                        className="form-control"
                        onChange={(e) => setCourse({ ...course, description: e.target.value })}
                    />
                    <hr />
                </>
            )}
            {currentUser?.role === "STUDENT" && (
                <button
                    className="btn btn-primary float-end"
                    onClick={() => setShowAllCourses((prev) => !prev)}
                >
                    {showAllCourses ? "My Enrollments" : "All Courses"}
                </button>
            )}
            <h2 id="wd-dashboard-published">Published Courses ({displayedCourses.length})</h2>
            <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {displayedCourses.map((course) => (
                        <div
                            className="wd-dashboard-course col"
                            style={{ width: "300px" }}
                            key={course._id}
                        >
                            <div className="card rounded-3 overflow-hidden">
                                <div
                                    className="wd-dashboard-course-link text-decoration-none text-dark"
                                    onClick={() => handleNavigate(course._id)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <img
                                        src={course.picture}
                                        width="100%"
                                        height={160}
                                        alt="Course logo"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{course.name}</h5>
                                        <p
                                            className="card-text overflow-y-hidden"
                                            style={{ maxHeight: 100 }}
                                        >
                                            {course.description}
                                        </p>
                                        <button className="btn btn-primary">Go</button>
                                        {currentUser?.role === "FACULTY" && (
                                            <>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setCourse(course);
                                                    }}
                                                    className="btn btn-warning me-2 float-end"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        deleteCourse(course._id);
                                                    }}
                                                    className="btn btn-danger float-end"
                                                >
                                                    Delete
                                                </button>
                                            </>
                                        )}
                                        {/* {currentUser?.role === "STUDENT" && ( */}
                                        {(currentUser?.role === "STUDENT" || currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN") && (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    toggleEnrollment(course._id);
                                                }}
                                                className={`btn float-end ${
                                                    enrolledCourses.includes(course._id)
                                                        ? "btn-danger"
                                                        : "btn-success"
                                                }`}
                                            >
                                                {enrolledCourses.includes(course._id)
                                                    ? "Unenroll"
                                                    : "Enroll"}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}





