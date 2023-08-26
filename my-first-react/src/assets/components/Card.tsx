import { Component } from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  id: string;
  poster_path: string;
  title: string;
  description: string;
}


class Card extends Component<CardProps> {
  
  render() {
    const { id, poster_path, title, description } = this.props;
 
    return (
      <div className="bg-white shadow-md mt-16  w-64 rounded-lg p-4">
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} className="w-full h-40 object-cover mb-4 rounded-lg" />
        <h3 className="text-lg font-semibold mb-2 overflow-hidden whitespace-nowrap overflow-ellipsis ">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <Link to={
          `/detail/${id}`
        }><button className="" >
           Detail Movie
         </button>
         </Link>
      </div>
    );
  }
}

export default Card;
