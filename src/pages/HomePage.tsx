
import { useEffect } from 'react';
import BookList from './BookList';
import { getData } from '../store/actions/booksAction';
import { useAppSelector, useAppDispatch } from '../hooks/hook'


const HomePage: React.FC = () => {
  const query =useAppSelector((state:any) => state.search)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getData(query));
    // eslint-disable-next-line
  }, []);

  return (
    <div className='mt-3'>
      <BookList />
    </div>
  );
};

export default HomePage;
