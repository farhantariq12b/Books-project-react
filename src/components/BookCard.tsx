import '../pages/BookList.css';
import { Link } from 'react-router-dom';
import noImage from '../assests/No_image.jpg'

const BookCard: React.FC<any> = ({ volumeInfo, id }) => {
  return (
    <div className="p-2 shadow-sm p-3 mb-5 bg-white rounded m-1 card">
      <Link to={`/detailPage/${id}`} className='inner-container'>
        <div className="content">
          <img
            src={volumeInfo.imageLinks?.thumbnail ?? noImage}
            className="card-img-top imgage"
            alt="Book Cover"
          />
        </div>
        <h3 className="contentTitle">{volumeInfo.title}</h3>
      </Link>
    </div>
  );
};

export default BookCard;
