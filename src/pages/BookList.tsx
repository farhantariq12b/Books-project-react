import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';
import Pagination from '../components/Pagination';
import './BookList.css';
import { useAppDispatch } from '../hooks/hook';
import { getData } from '../store/actions/booksAction';
import { Oval } from 'react-loader-spinner';

const BookList: React.FC = () => {
  const query = useSelector((state: any) => state.search);
  const state = useSelector((state: any) => state.book);
  const page = useSelector((state: any) => state.pagination);


  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getData({query, page}));
    // eslint-disable-next-line
  }, [query, page]);

  if(state.error){
    return <div className='text-danger loading display-6'>
      An error occurred. Refresh
    </div>
  }

  if(state.loading){
    return  <div className='loading'><Oval
    ariaLabel="loading-indicator"
    height={100}
    width={100}
    strokeWidth={10}
    strokeWidthSecondary={5}
    color="#dc3545"
    secondaryColor="white"
  />
  </div>
  }
  return (
    <div className="container-fluid">
      <div className="flex">
        {state.books.item?.length !== 0 ?          state.books.items?.map((item: any) => (
            <BookCard key={item.id} {...item} />
          )): <div className='text-danger loading display-6'>
          No items to show.
        </div>}
      </div>
      <div className="d-flex justify-content-center pb-5 pt-3 ">
        <Pagination />
      </div>
    </div>
  );
};

export default BookList;
