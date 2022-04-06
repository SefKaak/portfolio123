import Burger from '../components/Burger';
import Projet1txt from '../components/Projet1txt';
import {Helmet} from 'react-helmet-async';
export default function Projet1() {
    
    return <>
     <Helmet>
        <meta name="description" content="Portfolio de Seif kaak" />
        <title>Projet 1-Portfolio</title>
    </Helmet>
    <div>
    <Burger/>
        <Projet1txt/>
    </div>

    </>
}