import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';
import Pagination from '../components/Pagination';
import './BookList.css';
import { useAppDispatch } from '../hooks/hook';
import { getData } from '../store/actions/booksAction';

const BookList: React.FC = () => {
  const query = useSelector((state: any) => state.search);
  const state = useSelector((state: any) => state.book);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getData(query));
    // eslint-disable-next-line
  }, [query]);

  return (
    <div className="container-fluid">
      <div className="flex">
        {state.books.item?.length !== 0 &&
          state.books.items?.map((item: any) => (
            <BookCard key={item.id} {...item} />
          ))}
      </div>
      <div className="d-flex justify-content-center pb-5 pt-3 ">
        <Pagination />
      </div>
    </div>
  );
};

export default BookList;
