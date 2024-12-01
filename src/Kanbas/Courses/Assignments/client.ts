import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENT_API = `${REMOTE_SERVER}/api/assignments`;

export const updateAssignment = async (assignment: any) => {
    const { data } = await axios.put(`${ASSIGNMENT_API}/${assignment._id}`, assignment);
    return data;
  };
  
export const deleteAssignment = async (assignmentId: string) => {
 const response = await axios.delete(`${ASSIGNMENT_API}/${assignmentId}`);
 return response.data;
};

export const createAssignment = async (assignment: any) => {
    try {
      // Send POST request to the server to create a new assignment
      const { data } = await axios.post(ASSIGNMENT_API, assignment);
      return data;  // Return the newly created assignment
    } catch (error) {
      console.error("Error creating assignment:", error);
      throw error;  // Rethrow error to handle it elsewhere if needed
    }
  };


