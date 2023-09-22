import BookCard from '../components/BookCard';
import Pagination from '../components/Pagination';
import './BookList.css'

const BookList: React.FC = () => {
  const arr = [
    'WordPress vs Webflow',
    'How to Block SPAM “bot-traffic” in GA',
    '10 Best Business Plan Software',
    'WordPress vs Webflow',
    'How to Block SPAM “bot-traffic” in GA',
    '10 Best Business Plan Software',
    'WordPress vs Webflow',
    'How to Block SPAM “bot-traffic” in GA',
    '10 Best Business Plan Software'
  ];

  return (
    <div className="container-fluid">
      <div className="flex">
        {arr.map((item, index) => (
          <BookCard title={item} key={index}  id={index}/>
        ))}
      </div>
      <div className="d-flex justify-content-center pb-5 pt-3 ">
         <Pagination/>
      </div>
   
    </div>
  );
};

export default BookList;