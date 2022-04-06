import {lazy} from 'react';
import {Route, Routes} from 'react-router-dom';
import Layout from './pages/Layout';
import './App.css';

const Accueil = lazy(() => import('./pages/Accueil'));
const Projet1 = lazy(() => import('./pages/Projet1'));
const Projet2 = lazy(() => import('./pages/Projet2'));
const Contact = lazy(() => import('./pages/Contact'));

export default function App() {


    return (
   
     <div className="App">

      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index  element={<Accueil />}/>
        <Route path="projet1" element={<Projet1 />}/>
        <Route path="projet2" element={<Projet2 />} />
        <Route path="contact" element={<Contact />} />
        </Route>
        
      </Routes>

        
      </div>
       
    );
}