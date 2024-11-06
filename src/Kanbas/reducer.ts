import { createSlice } from "@reduxjs/toolkit";
import { courses, enrollments } from "./Database";

const loadEnrolledCourses = (currentUserId: string) => {
  const storedEnrollments = localStorage.getItem(`enrolledCourses_${currentUserId}`);
  return storedEnrollments ? JSON.parse(storedEnrollments) : [];
};

// Function to set enrolled courses in localStorage for a specific user
const saveEnrolledCourses = (currentUserId: string, enrolledCourses: string[]) => {
  localStorage.setItem(`enrolledCourses_${currentUserId}`, JSON.stringify(enrolledCourses));
};

const initialState = (currentUserId: string) => ({
  currentUserId,  // Add currentUserId to state
  availableCourses: courses,
  enrolledCourses: loadEnrolledCourses(currentUserId).length > 0
    ? loadEnrolledCourses(currentUserId)
    : enrollments.filter((enrollment) => enrollment.user === currentUserId)
        .map((enrollment) => enrollment.course),
  viewAllCourses: false,
});
  
  const enrollmentSlice = createSlice({
    name: "enrollment",
    initialState: initialState("123"),  
    reducers: {
      enrollCourse: (state, { payload: courseId }) => {
        // Only enroll if the course isn't already in enrolledCourses
        if (!state.enrolledCourses.includes(courseId)) {
          state.enrolledCourses.push(courseId);
          saveEnrolledCourses(state.currentUserId, state.enrolledCourses); 
        }
      },
      unenrollCourse: (state, { payload: courseId }) => {
        console.log('Unenrolling course:', courseId); // Log the course being unenrolled
        console.log('Before state:', state.enrolledCourses);
        // Remove the course ID from enrolledCourses
        state.enrolledCourses = state.enrolledCourses.filter(
          (id: any) => id !== courseId
        );

        console.log('After state:', state.enrolledCourses); // Log the updated state
        saveEnrolledCourses(state.currentUserId, state.enrolledCourses); 
      },
      toggleViewAllCourses: (state) => {
        // Toggle between viewing all courses or only enrolled ones
        state.viewAllCourses = !state.viewAllCourses;
      },
    },
  });
  
  export const { enrollCourse, unenrollCourse, toggleViewAllCourses } =
    enrollmentSlice.actions;
  export default enrollmentSlice.reducer;