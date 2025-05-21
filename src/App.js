import logo from './logo.svg';
import './App.css';
import AnimalList from './animal_list';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center my-6">Lista de Mascotas</h1>
      <AnimalList />
    </div>
  );
}

export default App;
