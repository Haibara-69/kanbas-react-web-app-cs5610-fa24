import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PeopleTable from "../Courses/People/Table";
import * as client from "./client";
import { FaPlus } from "react-icons/fa6";
import { User } from "../../Kanbas/types";

export default function Users() {
 const [users, setUsers] = useState<any[]>([]);
 const [role, setRole] = useState("");
 const [name, setName] = useState("");

 const filterUsersByRole = async (role: string) => {
   setRole(role);
   if (role) {
     const users = await client.findUsersByRole(role);
     setUsers(users);
   } else {
     fetchUsers();
   }
 };

const filterUsersByName = async (name: string) => {
    setName(name);
    if (name) {
      const users = await client.findUsersByPartialName(name);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

  const createUser = async () => {
    const user = await client.createUser({
      firstName: "New",
      lastName: `User${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: "password123",
      email: `email${users.length + 1}@neu.edu`,
      section: "S101",
      role: "STUDENT",
    });
    setUsers([...users, user]);
  };


const { uid } = useParams();
const fetchUsers = async () => {
      const users = await client.findAllUsers();
      setUsers(users);
    };
 useEffect(() => {
   fetchUsers();
 }, [uid]);
 return (
   <div>
    <button onClick={createUser} className="float-end btn btn-danger wd-add-people">
        <FaPlus className="me-2" />
        Users
      </button>
     <h3>Users</h3>
     <input onChange={(e) => filterUsersByName(e.target.value)} placeholder="Search people"
             className="form-control float-start w-25 me-2 wd-filter-by-name" />
     <select value={role} onChange={(e) =>filterUsersByRole(e.target.value)}
              className="form-select float-start w-25 wd-select-role" >
        <option value="">All Roles</option>    
        <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option> 
        <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Administrators</option>
      </select>

     <PeopleTable users={users} />
   </div>
);
}



// import { useState, useEffect } from "react";
// import { useParams } from "react-router";
// import * as client from "../Courses/client"; // Use the course client to fetch users
// import { User } from "../../Kanbas/types";

// export default function PeopleTable() {
//   const { cid } = useParams<{ cid: string }>(); // Get course ID from route params
//   const [users, setUsers] = useState<User[]>([]);

//   // Fetch users enrolled in the course
//   const fetchUsersForCourse = async () => {
//     try {
//       if (cid) {
//         const response = await client.findUsersForCourse(cid); // Call the backend API
//         setUsers(response); // Update the users state with the response data
//       }
//     } catch (error) {
//       console.error("Failed to fetch users for the course:", error);
//     }
//   };

//   useEffect(() => {
//     fetchUsersForCourse();
//   }, [cid]);

//   return (
//     <div id="wd-people-table">
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Login ID</th>
//             <th>Section</th>
//             <th>Role</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.length > 0 ? (
//             users.map((user) => (
//               <tr key={user._id}>
//                 <td>
//                   {user.firstName} {user.lastName}
//                 </td>
//                 <td>{user.loginId}</td>
//                 <td>{user.section}</td>
//                 <td>{user.role}</td>
//                 <td>{user.email}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={5} className="text-center">
//                 No users found for this course.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }


// import { useState, useEffect } from "react";
// import { useParams } from "react-router";
// import * as client from "../Courses/client"; // Use the course client to fetch users
// import { User } from "../../Kanbas/types";

// export default function PeopleTable() {
//   const { cid } = useParams<{ cid: string }>(); // Get course ID from route params
//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   // Fetch users enrolled in the course
//   const fetchUsersForCourse = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       if (cid) {
//         const response = await client.findUsersForCourse(cid); // Call the backend API
//         if (Array.isArray(response)) {
//           setUsers(response); // Update the users state with the response data
//         } else {
//           console.error("Unexpected API response:", response);
//           setError("Unexpected data format received from the server.");
//           setUsers([]);
//         }
//       }
//     } catch (error) {
//       console.error("Failed to fetch users for the course:", error);
//       setError("Failed to load users. Please try again later.");
//       setUsers([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUsersForCourse();
//   }, [cid]);

//   return (
//     <div id="wd-people-table">
//       {loading ? (
//         <div className="text-center">Loading users...</div>
//       ) : error ? (
//         <div className="text-danger text-center">{error}</div>
//       ) : (
//         <table className="table table-striped">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Login ID</th>
//               <th>Section</th>
//               <th>Role</th>
//               <th>Email</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.length > 0 ? (
//               users.map((user) => (
//                 <tr key={user._id}>
//                   <td>
//                     {user.firstName} {user.lastName}
//                   </td>
//                   <td>{user.loginId}</td>
//                   <td>{user.section}</td>
//                   <td>
//                     <span className="badge bg-primary">{user.role}</span>
//                   </td>
//                   <td>{user.email}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={5} className="text-center">
//                   No users found for this course.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }



