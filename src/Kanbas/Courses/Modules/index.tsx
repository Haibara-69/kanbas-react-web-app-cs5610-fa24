export default function Modules() {
    return (
      <div>
        <div>
            <button>Collapse All</button> <button>View Progress</button>
            <select id="wd-module-publish">
                <option value="PUBLISHALL">Publish All</option>
                <option value="SELECTED">Publish Selected</option>
                <option value="UNPUBLISHALL">Unpublish All</option>
            </select>
            <button>+ Module</button>
        </div>
        {/* Implement Collapse All button, View Progress button, etc. */}
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>

              <li className="wd-lesson">
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter1 - Introduction</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter2 - Creating User</li>
                </ul>
              </li>

              <li>
              <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to web development</li>
                  <li className="wd-content-item">Creating a React Application</li>
                </ul>
              </li>

            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn how to create user interface</li>
                  <li className="wd-content-item">Deploy the assignment to netlify</li>
                </ul>
              </li>

              <li>
              <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to HTML</li>
                  <li className="wd-content-item">Formatting Web content with Headings</li>
                </ul>
              </li>

            </ul>
          </li>
        </ul>
      </div>
  );}
  