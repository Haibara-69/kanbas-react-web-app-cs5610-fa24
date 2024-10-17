
import { Link, useParams, useLocation} from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const links = [
    { label: "Home", path: "Home" },
    { label: "Modules", path: "Modules" },
    { label: "Piazza", path: "Piazza" },
    { label: "Zoom", path: "Zoom" },
    { label: "Assignments", path: "Assignments" },
    { label: "Quizzes", path: "Quizzes" },
    { label: "Grades", path: "Grades" },
    { label: "People", path: "People" },
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const isActive = pathname.includes(link.path); 
        return (
          <Link
            key={link.path}
            to={`/Kanbas/Courses/${cid}/${link.path}`} // Use dynamic course ID in the route
            className={`list-group-item text-center border-0 
              ${isActive ? "active" : "text-danger bg-white"}`} 
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
