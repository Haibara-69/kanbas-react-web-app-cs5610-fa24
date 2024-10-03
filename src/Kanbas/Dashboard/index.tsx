import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses" className="row" style={{ marginLeft: '30px' }}>
      <div className="row row-cols-1 row-cols-md-5 g-4" style={{ gap: '30px', justifyContent: 'start' }}>

        <div className="wd-dashboard-course col" style={{ width: "270px", marginBottom: '30px'}}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Full Stack software developer
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
        </div>

        <div className="wd-dashboard-course col" style={{  width: "270px", marginBottom: '30px' }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5678/Home">
            <img src="/images/nodejs.jpg" width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                CS5678 Node JS</h5>
              <p className="wd-dashboard-course-title card-text">
                Backend Dev with Node.js
              </p>
              <button className="btn btn-primary"> Go </button>
              </div>
          </Link>
          </div>
          </div>
          
  
        <div className="wd-dashboard-course col" style={{  width: "270px", marginBottom: '30px' }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5008/Home">
            <img src="/images/c++.jpg" width="100%" height={160}/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS5008 C++
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Computer System
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
        </div>

        <div className="wd-dashboard-course col" style={{  width: "270px", marginBottom: '30px' }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5001/Home">
            <img src="/images/python.jpg" width="100%" height={160}/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS5001 Python
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Data analysis with Python
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
        </div>

        <div className="wd-dashboard-course col" style={{  width: "270px", marginBottom: '30px' }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5002/Home">
            <img src="/images/theory.jpg" width="100%" height={160}/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS5002 CS Theory
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Discrete Structure
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
        </div>

        <div className="wd-dashboard-course col" style={{  width: "270px", marginBottom: '30px' }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5004/Home">
            <img src="/images/object.jpg" width="100%" height={160}/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS5004 Java Dev
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Object Oriented Design
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
        </div>

        <div className="wd-dashboard-course col" style={{  width: "270px", marginBottom: '30px' }}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5200/Home">
            <img src="/images/data.jpg" width="100%" height={160}/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS5200 Database
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Data Structure
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
        </div>

        </div>
       </div>
      </div> 
    
  );
};

