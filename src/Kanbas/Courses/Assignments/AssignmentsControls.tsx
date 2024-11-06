import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Dispatch, SetStateAction } from "react";


export default function AssignmentsControls(
  { assignmentName, setAssignmentName, addAssignment }: 
  { assignmentName: string; setAssignmentName: Dispatch<SetStateAction<string>>; addAssignment: () => void }
) {

    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer); 
    const navigate = useNavigate();
    const { cid } = useParams();
        
    return (
    
    <div id="wd-assignments" className="input-group" style={{ width: "700px", paddingTop: "20px"}}>

        <span className="input-group-text" style={{ backgroundColor: 'transparent', borderRadius: "0"}}>
        <FaSearch className="position-relative" style={{ bottom: "1px"}} />
        </span>
        <input
        id="wd-search-assignment"
        className="form-control me-5"
        placeholder="Search..."
        style={{ borderLeft: 'none', width: "250px", fontSize: "20px"}}
        />
        <div className="ms-auto">
            <button id="wd-add-assignment-group" 
            className="btn btn-lg btn-secondary me-1"
            style={{ borderRadius: "0" }}>

            <FaPlus className="position-relative me-2" 
            style={{ bottom: "1px" }} />
            Group</button>

            {currentUser.role === "FACULTY" && (
            <button id="wd-add-assignment" 
            className="btn btn-lg btn-danger me-1"
            style={{ borderRadius: "0" }}
            onClick={() => navigate(`/Kanbas/Courses/${cid}/assignments/new`)}
            >
            <FaPlus className="position-relative me-2" style={{ bottom: "1px"}} />
            Assignment</button>
            )}
        </div>
    </div>
    )};
    

