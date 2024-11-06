import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs"; 


export default function AssignmentsControlButtons() {
  return (
    <div className="float-end">
      <span className="transparent-label me-2">40% of Total</span>
      <BsPlus className="fs-4 me-2" />
      
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
