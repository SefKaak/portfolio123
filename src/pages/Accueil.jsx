import Image from '../components/Image';
import Introduction from '../components/Introduction';
import {Helmet} from 'react-helmet-async';
export default function Accueil(){

    return <>
    <Helmet>
        <meta name="description" content="Portfolio de Seif kaak" />
        <title>Accueil-Portfolio</title>
    </Helmet>
        <div>
        <Image/>
        <Introduction/>
        </div>
    </>

}