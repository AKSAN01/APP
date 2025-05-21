import './animal.css';

const Animal = ({ nombre, especie, raza, foto, descripcion }) => {
    return (
    <div className='animal-card'>
        <img src={foto} alt={nombre} />
        <div className='info'>
        <h2>{nombre}</h2>
        <p>{especie} - {raza}</p>
        <p>{descripcion}</p>
        </div>
    </div>
    );
};

export default Animal;
