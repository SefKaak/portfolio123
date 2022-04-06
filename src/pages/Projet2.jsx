import Metier from '../components/Metier';
import Projet2txt from '../components/Projet2txt';
import {Helmet} from 'react-helmet-async';
export default function Projet2() {
    return <>
  <Helmet>
        <meta name="description" content="Portfolio de Seif kaak" />
        <title>Projet 2-Portfolio</title>
    </Helmet>
    <div>
      <Metier/>
      <Projet2txt/>
    </div>

    </>
}