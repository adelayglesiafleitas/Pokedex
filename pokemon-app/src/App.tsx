import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PokemonDetail from './pages/PokemonDetail';
import './App.css';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';

function App() {
  return (

    <div className='App'>
      <Header />
      {/*
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
      */}
      <Footer />
    </div>
  );
}

export default App;
