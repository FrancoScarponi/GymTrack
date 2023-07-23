import { Route , Routes} from 'react-router-dom';
import './App.css';
import { Inicio } from './components/Inicio';

function App() {
  return (

    
    <Routes>
      <Route path="/" element={<Inicio/>} />
    </Routes>

  );
}

export default App;
