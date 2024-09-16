export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label> 
        <br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />

        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <br />
          {/* Complete on your own */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" >
                <option value="ASSIGNMENT1">ASSIGNMENT 1</option>
                <option value="ASSIGNMENT2">ASSIGNMENT 2</option>
              </select>
            </td>
          </tr>
          <br />

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as" >
                <option value="PERCENTAGE">Percentage</option>
                <option value="GPA">Grade Point Average</option>
                <option value="LETTER">Letter</option>
              </select>
            </td>
          </tr>
          <br />

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type" >
                <option value="ONLINE">Online</option>
                <option value="ONSITE">Onsite</option>
              </select>
            </td>
          </tr>
          <br />
          
          <tr>
          <td align="right" valign="top">
          </td>

          <label>Online Entry Options</label><br/>

          <input type="checkbox" name="check-genre" id="wd-text-entry"/>
          <label htmlFor="wd-text-entry">TextEntry</label><br/>

          <input type="checkbox" name="check-genre" id="wd-website-url"/>
          <label htmlFor="wd-website-url">Website URL</label><br/>

          <input type="checkbox" name="check-genre" id="wd-media-recordings"/>
          <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

          <input type="checkbox" name="check-genre" id="wd-student-annotation"/>
          <label htmlFor="wd-student-annotation">Student Annotation</label> <br />

          <input type="checkbox" name="check-genre" id="wd-file-upload"/>
          <label htmlFor="wd-file-upload">File Uploads</label> <br />

          

          
          <br />
          <label htmlFor="wd-assign-to">Assign Assign to</label>  <br />
          <input id="wd-assign-to" value="Everyone"/> 
          <br />
        
          <br />
          <label htmlFor="wd-due-date">Due</label> <br />
          <input type="date"
                    id="wd-due-date"
                    value="2024-05-13"/> 
          <br />
        
          <br />
          <div style={{ display: 'flex', alignItems: 'center'}}>
          <label htmlFor="wd-available-from">Available from</label>
          <label htmlFor="wd-available-until" style={{ marginLeft: '30px' }}>Until</label> 
          </div>

          <div style={{ display: 'flex', alignItems: 'center'}}>
          <input type="date"
                    id="wd-available-from"
                    value="2024-05-06"/> 
          <input type="date"
                    id="wd-available-until"
                    value="2024-05-06" style={{ marginLeft: '5px' }}/> 

          </div>
          </tr>   
        </table>
        <hr />
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <button>Cancel</button> 
        <button style={{ marginLeft: '5px' }}>Save</button>
        </div>
        
      </div>
  );}
  
  