import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  const active = (path: string) => (pathname.includes(path) ? "active" : "");

  return (
    <div id="wd-account-navigation" className="list-group fs-5 rounded-0">  
          
      {links.map((link) => {
          const isActive = pathname === `/Kanbas/Account/${link}`; // Determine if the link is active

          return (
            <Link
              key={link}
              to={`/Kanbas/Account/${link}`}
              className={`list-group-item text-center border-0 
                ${isActive ? "active" : "text-danger bg-white"}`} // Use 'active' class if the link is active
            >
              {link}
            </Link>
          );
        })}

          {currentUser && currentUser.role === "ADMIN" && (
            <Link
              to={`/Kanbas/Account/Users`}
              className={`list-group-item text-center border-0 
                ${pathname === "/Kanbas/Account/Users" ? "active" : "text-danger bg-white"}`}
            >
              Users
            </Link>
          )}

          {/* {links.map((link) => (
            <Link key={link} to={`/Kanbas/Account/${link}`} className={`list-group-item ${active(link)}`}> {link} </Link>
          ))}
          {currentUser && currentUser.role === "ADMIN" && (
            <Link to={`/Kanbas/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link> )} */}

    </div>
  );
}