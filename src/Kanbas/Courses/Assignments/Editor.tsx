import { useParams, useNavigate } from "react-router-dom";
import * as db from "../../Database";
import { useState, useEffect } from "react";
import { addAssignment, updateAssignment } from "./reducer";
import { useDispatch } from "react-redux";


export default function AssignmentEditor() {
  const { cid,aid } = useParams<{ cid: string; aid?: string }>();
  const navigate = useNavigate();
  const assignments = db.assignments;
  const dispatch = useDispatch();

  const onlineEntryOptionsKeys = ['textEntry', 'websiteUrl', 'mediaRecordings', 'studentAnnotation', 'fileUpload'] as const;


  // Define the assignment type
  type Assignment = {
  _id: string;
  title: string;
  course: string;
  startTime: string;
  dueTime: string;
  points: number;
  group: string;
  displayGradeAs: string;
  submissionType: string;
  assignTo: string;
  dueDate: string;
  availableFrom: string;
  availableUntil: string;
  description: string;
  onlineEntryOptions: {
    textEntry: boolean;
    websiteUrl: boolean;
    mediaRecordings: boolean;
    studentAnnotation: boolean;
    fileUpload: boolean;
  };
};

  const defaultAssignment = {
    _id: aid || 'New ID',
    title: '',
    course: cid || '', 
    startTime: '',
    dueTime: '',
    points: 100,
    group: 'ASSIGNMENT1',
    displayGradeAs: 'PERCENTAGE',
    submissionType: 'ONLINE',
    assignTo: 'everyone',
    dueDate: '2024-05-20',
    availableFrom: '2024-05-13',
    availableUntil: '2024-05-20',
    description: 'the current description',
    onlineEntryOptions: {
      textEntry: false,
      websiteUrl: false,
      mediaRecordings: false,
      studentAnnotation: false,
      fileUpload: false,
    },
  };

  // State for the current assignment
  const [currentAssignment, setCurrentAssignment] = useState<Assignment>(defaultAssignment);
 
  useEffect(() => {
    console.log(`Fetching existing assignment for ID: ${aid}`);
    const existingAssignment = assignments.find(assign => assign._id === aid) as Assignment | undefined;
    console.log(`Existing Assignment Found: ${existingAssignment}`);
    
    if (existingAssignment) {
      setCurrentAssignment({
        ...defaultAssignment,
        ...existingAssignment,
        onlineEntryOptions: {
          ...defaultAssignment.onlineEntryOptions,
          ...existingAssignment.onlineEntryOptions,
        },
      });
    }
  }, [aid, assignments]);

  

  const handleSave = () => {
    if (!cid) {
      console.error("Course ID (cid) is not defined.");
      return;
    }

    const updatedAssignment = { ...currentAssignment, course: cid };

    if (aid) {
      dispatch(updateAssignment(updatedAssignment)); // Dispatch update action
    } else {
      dispatch(addAssignment(updatedAssignment)); // Dispatch add action
    }

    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
      <div id="wd-assignments-editor" className="container" style={{ width: '700px', margin: '0 auto', marginLeft: '20px'}}>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="wd-name" className="form-label">Assignments Name</label>
            <input id="wd-name" className="form-control"   
            value={currentAssignment.title} 
            placeholder="Assignment Name"
            onChange={(e) => 
               
            setCurrentAssignment({ ...currentAssignment, 
            title: e.target.value })}></input>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">  
            <textarea 
              id="wd-description" className="form-control" 
              rows={12} 
              value={currentAssignment.description} 
              onChange={(e) => setCurrentAssignment({ ...currentAssignment, description: e.target.value })}           
            />
          </div>
        </div>

        <div className="row mb-3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>

        <div className="col-md-11 mb-3">
          <div className="row align-items-center g-3">
            <div className="col-md-3 text-end">
              <label htmlFor="wd-points" className="form-label">Points</label>
            </div>
            <div className="col-md-9">
              <input id="wd-points" type="number" className="form-control" 
              value={currentAssignment.points}
              onChange={(e) => setCurrentAssignment({ ...currentAssignment, points: Number(e.target.value) })} />
            </div>
          </div>
          </div>

        <div className="col-md-11 mb-3">
          <div className="row align-items-center g-3">
            <div className="col-md-3 text-end">
              <label htmlFor="wd-points" className="form-label">Assignment Group</label>
            </div>
          <div className="col-md-9">
          <select id="wd-group" className="form-select" 
          value={currentAssignment.group || 'ASSIGNMENT1'}
          onChange={(e) => setCurrentAssignment({ ...currentAssignment, group: e.target.value })}> 
            <option value="ASSIGNMENT1">ASSIGNMENT 1</option>
            <option value="ASSIGNMENT2">ASSIGNMENT 2</option>
          </select>
          </div>
        </div>
        </div>

        <div className="col-md-11 mb-3">
          <div className="row align-items-center g-3">
            <div className="col-md-3 text-end">
            <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
          </div>
        <div className="col-md-9">
            <select id="wd-display-grade-as" className="form-select"
            value={currentAssignment.displayGradeAs || 'PERCENTAGE'}
            onChange={(e) => setCurrentAssignment({ ...currentAssignment, displayGradeAs: e.target.value })}>
              <option value="PERCENTAGE">Percentage</option>
              <option value="GPA">Grade Point Average</option>
              <option value="LETTER">Letter</option>
            </select>
          </div>
        </div>
        </div>
    

        <div className="col-md-11 mb-3">
          <div className="row align-items-start g-3">
            <div className="col-md-3 text-end">
         <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
         </div>
         <div className="col-md-9">
          <div className="form-control pt-3">
            <select id="wd-submission-type" className="form-select"
            value={currentAssignment.submissionType}
            onChange={(e) => setCurrentAssignment({ ...currentAssignment, submissionType: e.target.value })}
            >
              <option value="ONLINE">Online</option>
              <option value="ONSITE">Onsite</option>
            </select>
          
            <label className="fw-bold pt-3">Online Entry Options</label>
            {onlineEntryOptionsKeys.map((option) => (
              <div className="form-check pt-3" key={option}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={`wd-${option}`}
                  checked={currentAssignment.onlineEntryOptions[option]}
                  onChange={(e) =>
                    setCurrentAssignment((prev) => ({
                      ...prev,
                      onlineEntryOptions: { ...prev.onlineEntryOptions, [option]: e.target.checked },
                    }))
                  }
                />
                <label className="form-check-label" htmlFor={`wd-${option}`}>
                  {option.replace(/([A-Z])/g, ' $1')}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>

      <div className="col-md-11 mb-3">
          <div className="row align-items-start g-3">
            <div className="col-md-3 text-end">
       
        <label htmlFor="wd-submission-type" className="form-label">Assign</label>
        </div>
        <div className="col-md-9">
        <div className="form-control">
       
              <label htmlFor="wd-assign-to" className="form-label fw-bold pt-2">Assign to</label>
              <input id="wd-assign-to" className="form-control"  value={currentAssignment.assignTo}
              onChange={(e) => setCurrentAssignment({ ...currentAssignment, assignTo: e.target.value })}/>
              

              <label htmlFor="wd-due-date" className="form-label fw-bold  pt-3">Due</label>
              <input type="date" id="wd-due-date" className="form-control" value={currentAssignment.dueDate}
              onChange={(e) => setCurrentAssignment({ ...currentAssignment, dueDate: e.target.value })}/>
            
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="wd-available-from" className="form-label fw-bold  pt-3">Available from</label>
                    <input type="date" id="wd-available-from" className="form-control mb-3" value={currentAssignment.availableFrom} 
                    onChange={(e) => setCurrentAssignment({ ...currentAssignment, availableFrom: e.target.value })}
                    />
                  </div>
                  
                  <div className="col-md-6">
                    <label htmlFor="wd-available-until" className="form-label fw-bold  pt-3">Until</label>
                    <input type="date" id="wd-available-until" className="form-control mb-3" value={currentAssignment.availableUntil} 
                    onChange={(e) => setCurrentAssignment({ ...currentAssignment, availableUntil: e.target.value })}/>
                  </div>
                </div>
          </div>
          </div>
          </div>
      </div>
      
        <hr />
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          
        <button className="btn btn-lg btn-secondary me-1"
        onClick={handleCancel}>Cancel</button> 
        <button className="btn btn-lg btn-danger me-1" style={{marginLeft: '5px'  }} 
        onClick={handleSave}>Save</button>
      
         </div>
      </div> 
    </div> 
        
  );}