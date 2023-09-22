import './Pagination.css'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Pagination: React.FC =()=> {


  return (
    <div className="paginationContainer">
      <button data-sign="-" >
        <FiChevronLeft />
      </button>

      <div className="currentPage">{1}</div>
      <p style={{ display: "flex" }}>of {20}</p>

      <button data-sign="+" >
        <FiChevronRight />
      </button>
    </div>
  );
}

export default Pagination;
