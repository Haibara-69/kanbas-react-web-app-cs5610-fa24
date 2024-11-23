import { createSlice } from "@reduxjs/toolkit";
// import * as db from '../../Database'; 

const initialState = {
    assignments: [],
};

const generateRandomId = (assignments: any) => {
    let newId;
    const existingIds = new Set(assignments.map((assignment: any) => assignment._id));

    do {
        const randomNumber = Math.floor(100 + Math.random() * 900); 
        newId = `A${randomNumber}`;
    } while (existingIds.has(newId)); 

    return newId;
};

const assignmentsSlice = createSlice({
    name: 'assignments',
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment = {
                _id: assignment._id || generateRandomId(state.assignments), 
                title: assignment.title || "untitled",
                course: assignment.course,
                points: assignment.points,
                availableFrom: assignment.availableFrom,
                dueDate: assignment.dueDate,
            };
            
            state.assignments = [...state.assignments, newAssignment] as any;
            console.log("Assignments after add:", state.assignments);
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== assignmentId
            ) as any;
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? assignment : a
            ) as any;
        },

    }

});

export const { addAssignment, deleteAssignment, updateAssignment, setAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;