// import { FaUserCircle } from "react-icons/fa";
// import { Link, useParams } from "react-router-dom";
// //import * as db from "../../Database";
// import React, { useState, useEffect } from "react";
// import * as client from "../../Account/client";
// import PeopleDetails from "./Details";
// import * as courseClient from "../../Courses/client"; 

// export default function PeopleTable({ users = [] }: { users?: any[] }) {
// //  const { cid } = useParams();
// //const { users, enrollments } = db;


//   console.log("All users:", users);

//   return (
//     <div id="wd-people-table">
//       <PeopleDetails />
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Login ID</th>
//             <th>Section</th>
//             <th>Role</th>
//             <th>Email</th>
//             <th>Last Activity</th>
//             <th>Total Activity</th>
//             </tr>
//         </thead>
//         <tbody>
//           {users
//             //.filter((usr) =>
//               //enrollments.some((enrollment) => enrollment.user === usr._id && enrollment.course === cid)
//             //)
//             .map((user: any) => (
//               <tr key={user._id}>

//                 <td className="wd-full-name text-nowrap">
//                 <Link to={`/Kanbas/Account/Users/${user._id}`} className="text-decoration-none">
//                   <FaUserCircle className="me-2 fs-1 text-secondary" />
//                   <span className="wd-first-name">{user.firstName}</span>
//                   <span className="wd-last-name">{user.lastName}</span>
//                 </Link>
//                 </td>
//                 <td className="wd-login-id">{user.loginId}</td>
//                 <td className="wd-section">{user.section}</td>
//                 <td className="wd-role">{user.role}</td>
//                 <td className="wd-email">{user.email}</td>
//                 <td className="wd-last-activity">{user.lastActivity}</td>
//                 <td className="wd-total-activity">{user.totalActivity}</td>
//               </tr>
//             ))}
//         </tbody>


//       </table>
//     </div> 
//     );}

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import * as courseClient from "../../Courses/client";
import PeopleDetails from "./Details";

export default function PeopleTable({ users, courseId }: { users?: any[]; courseId?: string }) {
  const { cid } = useParams(); // Get course ID from route params
  const [enrolledUsers, setEnrolledUsers] = useState<any[]>([]);

  useEffect(() => {
    if (!users && (courseId || cid)) {
      const fetchEnrolledUsers = async () => {
        try {
          const courseToFetch = courseId || cid;
          if (courseToFetch) {
            const fetchedUsers = await courseClient.findUsersForCourse(courseToFetch);
            console.log("Fetched users from API:", fetchedUsers); // Debug API response
            setEnrolledUsers(fetchedUsers || []); // Ensure it's an array
          }
        } catch (error) {
          console.error("Failed to fetch enrolled users:", error);
        }
      };

      fetchEnrolledUsers();
    }
  }, [users, courseId, cid]);

  // Ensure `usersToDisplay` is always an array
  const usersToDisplay = Array.isArray(users) ? users : Array.isArray(enrolledUsers) ? enrolledUsers : [];

  return (
    <div id="wd-people-table">
      <PeopleDetails />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Email</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {usersToDisplay.length > 0 ? (
            usersToDisplay.map((user: any) => (
              <tr key={user._id}>
                <td className="wd-full-name text-nowrap">
                  <Link to={`/Kanbas/Account/Users/${user._id}`} className="text-decoration-none">
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">{user.firstName}</span> <span className="wd-last-name">{user.lastName}</span>
                  </Link>
                </td>
                <td className="wd-login-id">{user.loginId}</td>
                <td className="wd-section">{user.section}</td>
                <td className="wd-email">{user.email}</td>
                <td className="wd-role">{user.role}</td>
                <td className="wd-last-activity">{user.lastActivity}</td>
                <td className="wd-total-activity">{user.totalActivity}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="text-center">
                No users found for this course.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}


