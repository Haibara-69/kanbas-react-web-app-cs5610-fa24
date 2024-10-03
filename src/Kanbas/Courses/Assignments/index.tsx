import { FaCaretDown } from "react-icons/fa";
import { BsGripVertical } from 'react-icons/bs';
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButton";
import AssignmentsControlButtons from "./AssignmentsControlButtons";

export default function Assignments() {
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
        <li className="wd-assignment-list-item list-group-item p-3 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-3 fs-3" style={{ marginLeft: '-5px' }}/>
            <span>
              <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                A1
              </a><br />
              <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am |<br />
              <b>Due</b> May 13 at 11:59pm | 100pts <br />
            </span>  
          </div>   
       
          <AssignmentControlButtons /> 

        </li>

        <li className="wd-assignment-list-item list-group-item p-3 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-3 fs-3" style={{ marginLeft: '-5px' }}/>
            <span>
              <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                A2
              </a><br />
              <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am |<br />
              <b>Due</b> May 20 at 11:59pm | 100pts <br />
            </span>
          </div>     
          <AssignmentControlButtons />
        </li>

        <li className="wd-assignment-list-item list-group-item p-3 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-3 fs-3" style={{ marginLeft: '-5px' }}/>
            <span>
              <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                A3
              </a><br />
              <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am |<br />
              <b>Due</b> June 3 at 11:59pm | 100pts <br />
            </span>
          </div>     
          <AssignmentControlButtons />
        </li>

          </ul>
          </li>

        </ul>

      </div>
  );}
  