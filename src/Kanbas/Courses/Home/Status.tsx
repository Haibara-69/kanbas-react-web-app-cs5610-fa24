import { MdDoNotDisturbAlt } from "react-icons/md"; // Material Design Icons
import { FaCheckCircle } from "react-icons/fa"; // Font Awesome Icons
import { BiImport } from "react-icons/bi"; // Boxicons Icons
import { LiaFileImportSolid } from "react-icons/lia"; // Line Awesome Icons
import { BiAperture } from "react-icons/bi";
import { FiBox } from "react-icons/fi";
import { FiAlertTriangle } from "react-icons/fi";
import { FiCommand } from "react-icons/fi";
import { CiBullhorn } from "react-icons/ci";


export default function CourseStatus() {
    return (
      <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish </button>
        </div>
      </div><br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiAperture  className="me-2 fs-5" /> Choose Home page </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FiCommand className="me-2 fs-5" /> View Course Stream </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <CiBullhorn className="me-2 fs-5" /> New Announcement </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FiBox className="me-2 fs-5" /> New Analytics </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FiAlertTriangle className="me-2 fs-5" /> View Course Notifications </button>
        
    </div>
      
  );}
  
  