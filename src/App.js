import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimalList from './animal_list';
import Detalle from './detalle';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnimalList />} />
        <Route path="/animal_list/:id" element={<Detalle />} />
      </Routes>
    </Router>
  );
}

export default App;

