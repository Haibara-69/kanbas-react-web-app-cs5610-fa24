import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} alt="ReactJs" />
            <div>
              <h5>
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" 
                to="/Kanbas/Courses/5678/Home">
            <img src="/images/nodejs.jpg" width={200} alt="NodeJS" />
            <div>
              <h5>CS5678 Node JS</h5>
              <p className="wd-dashboard-course-title">
                Backend development with Node.js
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5008/Home">
            <img src="/images/c++.jpg" width={200} alt="C++"/>
            <div>
              <h5>
                 CS5008 C++
              </h5>
              <p className="wd-dashboard-course-title">
                Computer System
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5001/Home">
            <img src="/images/python.jpg" width={200} alt="Python"/>
            <div>
              <h5>
                 CS5001 Python
              </h5>
              <p className="wd-dashboard-course-title">
                Data analysis with Python
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5002/Home">
            <img src="/images/theory.jpg" width={200} alt="Theory"/>
            <div>
              <h5>
                 CS5002 Computer Theory
              </h5>
              <p className="wd-dashboard-course-title">
                Discrete Structure
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5004/Home">
            <img src="/images/object.jpg" width={200} alt="Object"/>
            <div>
              <h5>
                 CS5004 Python Programming
              </h5>
              <p className="wd-dashboard-course-title">
                Object Oriented Design
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5200/Home">
            <img src="/images/data.jpg" width={200} alt="Data"/>
            <div>
              <h5>
                 CS5200 Merged
              </h5>
              <p className="wd-dashboard-course-title">
                Data Structure
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}

