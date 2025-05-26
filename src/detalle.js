// Detalle.js
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import NavBar from './navbar';
import './detalle.css';

const Detalle = () => {
  const { id } = useParams(); // capturamos id de la URL
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/4eb2d8431a0253f764dad867decc592038e80cac/mascotas.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(a => a.id === parseInt(id));
        if (found) {
          setAnimal(found);
        } else {
          setError('Animal no encontrado');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Error cargando datos');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <NavBar />
      <div className='animal-card'>
        <img src={animal.foto} alt={animal.nombre} />
        <div className='info'>
          <h2>{animal.nombre}</h2>
          <p>{animal.especie} - {animal.raza}</p>
          <p>{animal.descripcion}</p>
        </div>
      </div>
    </>
  );
};

export default Detalle;
