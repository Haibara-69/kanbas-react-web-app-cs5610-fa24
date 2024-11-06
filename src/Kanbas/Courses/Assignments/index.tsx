import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment as deleteAssignmentAction, updateAssignment as updateAssignmentAction } from "./reducer";

import { FaCaretDown } from "react-icons/fa";
import { BsGripVertical } from 'react-icons/bs';
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButton";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import { useParams  } from "react-router-dom";

export default function Assignments() {  
  const { cid } = useParams();
  const [assignmentName, setAssignmentName] = useState("");
  const [editingAssignmentId, setEditingAssignmentId] = useState<string | null>(null);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer); 

  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const courseAssignments = assignments.filter((assignment: any) => assignment.course === cid);

  const addNewAssignment = () => {
    if (!assignmentName.trim()) return;
    const newAssignment = {
      _id: new Date().getTime().toString(),
      title: assignmentName,
      course: cid,
      lessons: [],
      points: Number,
      availableFrom: '2024-05-13',
      dueDate: '2024-5-20',
    };
    dispatch(addAssignment(newAssignment)); // Dispatch addAssignment action
    setAssignmentName("");
  };

  const deleteAssignment = (assignmentId: string) => {
    dispatch(deleteAssignmentAction(assignmentId)); // Dispatch deleteAssignment action
  };

  const editAssignment = (assignmentId: string) => {
    const assignmentToEdit = courseAssignments.find((a: any) => a._id === assignmentId);
    if (assignmentToEdit) {
      setEditingAssignmentId(assignmentId);
      setAssignmentName(assignmentToEdit.name); // Set the name for editing
    }
  };

  const updateAssignment = () => {
    if (!assignmentName.trim()) return;
    const updatedAssignment = courseAssignments.find((assignment: any) => assignment._id === editingAssignmentId);
    if (updatedAssignment) {
      dispatch(updateAssignmentAction({ ...updatedAssignment, name: assignmentName }));
      setEditingAssignmentId(null); 
      setAssignmentName(""); 
    }
  };


    return (
      <div>
      <AssignmentsControls 
      assignmentName={assignmentName}
      setAssignmentName={setAssignmentName}
      addAssignment={addNewAssignment}
      /><br /><br />

        <ul id="wd-assignment-list"  className="list-group rounded-0" style={{ width: "700px"}}> 

        <li className="wd-assignments-title list-group-item p-0 mb-5 fs-5 border-gray">
        <div className="wd-title p-3 ps-2 bg-secondary"> 
        <BsGripVertical className="me-2 fs-3" />
        <FaCaretDown className="me-2" style={{ fontSize: '15px' }} />
        ASSIGNMENTS      
        <AssignmentsControlButtons/> 
        </div>
        <ul className="wd-assignments list-group rounded-0">
          {courseAssignments.map((assignment: any) => (
            <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
              <BsGripVertical className="me-3 fs-3" style={{ marginLeft: '-5px' }}/>
              <span>
              {currentUser.role === 'FACULTY' ? (
                      <a
                        className="wd-assignment-link" 
                        href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                        onClick={() => editAssignment(assignment._id)}
                      > 
                        {assignment._id} - {assignment.title}
                      </a>
                    ) : (
                      <span className="wd-assignment-link text-muted">
                        {assignment._id} - {assignment.title}
                      </span>
                    )}
                    
                    <br />
                <span className="text-danger"> Multiple Modules</span> | <b>Not available until</b> {assignment.availableFrom} |<br />
              <b>Due</b> {assignment.dueDate} | {assignment.points} pts <br />
            </span>  
              </div>  
              {courseAssignments.length > 0 && ( 
              <AssignmentControlButtons
              assignmentId={assignment._id}
              deleteAssignment={deleteAssignment}
              /> 
            )}
            </li>
            
            ))}
          </ul>
          </li>
        </ul>
      </div>
    );
  }
        
  