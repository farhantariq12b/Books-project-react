import { useSelector } from 'react-redux';
import './Pagination.css'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useAppDispatch } from '../hooks/hook';
import { decrease, increase } from '../store/reducers/paginationReducer';

const Pagination: React.FC =()=> {
  const dispatch=useAppDispatch();
  
  const { books } =  useSelector((state: any) => state.book);
  const page =  useSelector((state: any) => state.pagination);


  let totalPages =Math.round(books.totalItems/10) +1

  const handlePagination = (event:any)=>{
    const {
      currentTarget: {
        dataset: { sign },
      },
    } = event;

    if (sign === "+" && page < totalPages) {
      dispatch(increase());
    } else if (sign === "-" && page > 1) {
      dispatch(decrease());
    }
  }

  return (
    <div className="paginationContainer">
      <button data-sign="-" onClick={handlePagination}>
        <FiChevronLeft />
      </button>

      <div className="currentPage">{page}</div>
      <p className='out-of'>of {totalPages}</p>

      <button data-sign="+" onClick={handlePagination}>
        <FiChevronRight />
      </button>
    </div>
  );
}

export default Pagination;
