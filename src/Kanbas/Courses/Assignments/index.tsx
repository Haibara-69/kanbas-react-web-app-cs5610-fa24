import { FaCaretDown } from "react-icons/fa";
import { BsGripVertical } from 'react-icons/bs';
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButton";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import { useParams  } from "react-router-dom";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(assignment => assignment.course
    === cid);

    return (
      <div>
      <AssignmentsControls /><br /><br />

        <ul id="wd-assignment-list"  className="list-group rounded-0" style={{ width: "700px"}}> 

        <li className="wd-assignments-title list-group-item p-0 mb-5 fs-5 border-gray">
        <div className="wd-title p-3 ps-2 bg-secondary"> 
        <BsGripVertical className="me-2 fs-3" />
        <FaCaretDown className="me-2" style={{ fontSize: '15px' }} />
        ASSIGNMENTS 
        <AssignmentsControlButtons />
        </div>
        <ul className="wd-assignments list-group rounded-0">
          {courseAssignments.map(assignment => (
            <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
              <BsGripVertical className="me-3 fs-3" style={{ marginLeft: '-5px' }}/>
              <span>
                <a className="wd-assignment-link" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                      {assignment._id}
                    </a><br />
                <span className="text-danger"> Multiple Modules</span> | <b>Not available until</b> {assignment.startTime} |<br />
              <b>Due</b> {assignment.dueTime} | 100pts <br />
            </span>  
              </div>   
             <AssignmentControlButtons /> 
            </li>
            ))}
          </ul>
          </li>
        </ul>
      </div>
    );
  }
        
  