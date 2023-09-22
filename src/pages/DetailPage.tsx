import './Detail.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DetailPage: React.FC<any> = () => {
  const { books } = useSelector((state: any) => state.book);
  const { id } = useParams();

  // Check if bookDetail is defined before accessing its properties
  const bookDetail = books.items.find((book: any) => book.id === id);

  return (
    <div className="heading container mt-4">
      <div className="border-bottom">
        <h1 className="text-danger">{bookDetail?.volumeInfo?.title}</h1>
      </div>
      <div className="details">
        <div className="cover_image">
          <img
            src={bookDetail?.volumeInfo?.imageLinks?.thumbnail || ''}
            alt="book_image"
          />
        </div>
        <div className="description">
          <div className="mt-3">
            <span>Author:</span> {bookDetail?.volumeInfo?.authors?.[0] || 'N/A'}
          </div>
          <div className="mt-2">
            <span>Published Date:</span>{' '}
            {bookDetail?.volumeInfo?.publishedDate || ''}
          </div>
          <div className="mt-2">
            <span>Brief Description:</span>{' '}
            {bookDetail?.volumeInfo?.description || ''}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
