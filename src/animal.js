import './animal.css';
import { Link } from 'react-router-dom';

const Animal = ({ id, nombre, especie, raza, foto, descripcion }) => {
  return (
    <div className='animal-card'>
      <Link to={`/animal_list/${id}`}>
        <img src={foto} alt={nombre} />
      </Link>
      <div className='info'>
        <h2>{nombre}</h2>
        <p>{especie} - {raza}</p>
        <p>{descripcion}</p>
      </div>
    </div>
  );
};

export default Animal;


