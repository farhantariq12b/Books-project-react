import Pic from '../logo512.png';
import '../pages/BookList.css'
import { Link, useNavigate } from 'react-router-dom';
interface BookListProps {
    title: string;
    image?: string;
    id?:number;
  }

const BookCard: React.FC<BookListProps> = ({title,image,id }) => {
const navigation=useNavigate()
const handleChange=()=>{
navigation(`/detailPage/${id}`)
}
return <div className="p-2 shadow-sm p-3 mb-5 bg-white rounded m-1" >
        <Link to={`/detailPage/${id}`}>
            <div className="content">
              <img src={image || Pic} className="card-img-top" alt="Book Cover" />
            </div>
            <h3 className="contentTitle">{title}</h3>
          </Link>
          </div>
}

export default BookCard;