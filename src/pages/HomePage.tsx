
import { useEffect } from 'react';
import BookList from './BookList';
import { getData } from '../store/actions/booksAction';
import { useAppSelector, useAppDispatch } from '../hooks/hook'
import { useSelector } from 'react-redux';


const HomePage: React.FC = () => {
  const query =useSelector((state:any) => state.search)
  console.log(query)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getData(query));
    // eslint-disable-next-line
  }, [query]);

  return (
    <div className='mt-3'>
      <BookList />
    </div>
  );
};

export default HomePage;
