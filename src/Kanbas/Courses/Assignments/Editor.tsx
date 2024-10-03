export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor" className="container" style={{ width: '700px', margin: '0 auto', marginLeft: '20px'}}>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="wd-name" className="form-label">Assignment Name</label>
            <input id="wd-name" className="form-control" value="A1" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">  
            <textarea 
              id="wd-description" 
              className="form-control" 
              rows={12} 
              value={
                `The assignment is available online .\n\n` +
                `Submit a link to the landing page of your Web application running on Netlify.\n\n` +
                `The landing page should include the following:\n` +
                `• Your full name and section\n` +
                `• Links to each of the lab assignments\n` +
                `• Link to the Kanbas application\n` +
                `• Links to all relevant source code repositories\n\n` +
                `The Kanbas application should include a link to navigate back to the landing page.`
              } 
              
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
              <input id="wd-points" type="number" className="form-control" value={100} />
            </div>
          </div>
          </div>

        <div className="col-md-11 mb-3">
          <div className="row align-items-center g-3">
            <div className="col-md-3 text-end">
              <label htmlFor="wd-points" className="form-label">Assignment Group</label>
            </div>
          <div className="col-md-9">
          <select id="wd-group" className="form-select" > {/* Adjust flex basis */}
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
            <select id="wd-display-grade-as" className="form-select">
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
            <select id="wd-submission-type" className="form-select">
              <option value="ONLINE">Online</option>
              <option value="ONSITE">Onsite</option>
            </select>
          
            <label className="fw-bold pt-3">Online Entry Options</label>
            <div className="form-check pt-3">
              <input type="checkbox" className="form-check-input" id="wd-text-entry" />
              <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
            </div>
            <div className="form-check pt-3">
              <input type="checkbox" className="form-check-input" id="wd-website-url" />
              <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
            </div>
            <div className="form-check pt-3">
              <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
              <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
            </div>
            <div className="form-check pt-3">
              <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
              <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
            </div>
            <div className="form-check pt-3">
              <input type="checkbox" className="form-check-input" id="wd-file-upload" />
              <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
            </div>

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
              <input id="wd-assign-to" className="form-control" value="Everyone" />
              

              <label htmlFor="wd-due-date" className="form-label fw-bold  pt-3">Due</label>
              <input type="date" id="wd-due-date" className="form-control" value="2024-05-13" />
            
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="wd-available-from" className="form-label fw-bold  pt-3">Available from</label>
                    <input type="date" id="wd-available-from" className="form-control mb-3" value="2024-05-06" />
                  </div>
                  
                  <div className="col-md-6">
                    <label htmlFor="wd-available-until" className="form-label fw-bold  pt-3">Until</label>
                    <input type="date" id="wd-available-until" className="form-control mb-3" value="2024-05-06" />
                  </div>
                </div>
          </div>
          </div>
        </div>
      </div>
      
      </div>
      
      
        <hr />
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <button className="btn btn-lg btn-secondary me-1">Cancel</button> 
        <button className="btn btn-lg btn-danger me-1" style={{ marginLeft: '5px' }}>Save</button>
        </div> 
        </div>
        
      
  );}
  
  