import React, { useEffect, useState } from 'react';
import Animal from './animal.js';
import './animal.css';

const AnimalList = () => {
    const [animales, setAnimales] = useState([]);

    useEffect(() => {
        fetch('https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json')
            .then(response => response.json())
            .then(data => setAnimales(data))
        .catch(error => console.error('Error al cargar los datos:', error));
    }, []);

    return (
    <div className='animal-list'>
        {animales.map((animal,) => (
        <Animal
            key={animal.id}
            nombre={animal.nombre}
            especie={animal.especie}
            raza={animal.raza}
            foto={animal.foto}
            descripcion={animal.descripcion}
        />
        ))}
    </div>
    );
};

export default AnimalList;
